import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import connectDB from '@/lib/mongodb';
import Waitlist from '@/models/Waitlist';
import { sendTransactionalEmail, generateWaitlistConfirmationEmail } from '@/lib/mailchimp';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(request: NextRequest) {
  try {
    const { sessionId } = await request.json();

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    // Check if Stripe is properly configured
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Payment service not configured' },
        { status: 500 }
      );
    }

    await connectDB();

    // Retrieve the session to get payment details
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    
    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { error: 'Payment not completed' },
        { status: 400 }
      );
    }

    // Check if waitlist entry already exists
    const existingEntry = await Waitlist.findOne({ 
      stripeSessionId: sessionId 
    });

    if (existingEntry) {
      console.log('Waitlist entry already exists for session:', sessionId);
      return NextResponse.json({
        success: true,
        message: 'Waitlist entry already confirmed',
        waitlistEntry: existingEntry
      });
    }

    // Create new waitlist entry
    const waitlistEntry = new Waitlist({
      name: session.metadata?.customerName || 'Unknown',
      email: session.customer_email || session.metadata?.email || 'unknown@example.com',
      matchId: parseInt(session.metadata?.matchId || '0'),
      matchDetails: session.metadata?.matchDetails || 'Unknown Match',
      stripePaymentId: session.payment_intent as string,
      stripeSessionId: sessionId,
      amount: (session.amount_total || 999) / 100, // Convert from cents
      currency: session.currency?.toUpperCase() || 'CAD',
      status: 'confirmed',
      emailSent: false,
    });

    await waitlistEntry.save();
    console.log('Waitlist entry saved:', waitlistEntry._id);

    // Send confirmation email
    try {
      const { subject, htmlContent } = generateWaitlistConfirmationEmail({
        name: waitlistEntry.name,
        email: waitlistEntry.email,
        matchDetails: waitlistEntry.matchDetails,
        amount: waitlistEntry.amount,
        currency: waitlistEntry.currency,
      });

      await sendTransactionalEmail({
        to_email: waitlistEntry.email,
        to_name: waitlistEntry.name,
        subject,
        html_content: htmlContent,
      });

      // Mark email as sent
      await Waitlist.findByIdAndUpdate(waitlistEntry._id, { emailSent: true });
      console.log('Confirmation email sent for waitlist entry:', waitlistEntry._id);
    } catch (emailError) {
      console.error('Error sending confirmation email:', emailError);
      // Don't fail the whole request if email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Waitlist entry confirmed and email sent',
      waitlistEntry
    });

  } catch (error) {
    console.error('Error confirming waitlist:', error);
    
    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: `Stripe error: ${error.message}` },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to confirm waitlist entry' },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Check if Stripe secret key is configured
if (!process.env.STRIPE_SECRET_KEY) {
  console.error('STRIPE_SECRET_KEY is not configured');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(request: NextRequest) {
  try {
    // Check if Stripe is properly configured
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Payment service not configured. Please contact support.' },
        { status: 500 }
      );
    }

    const { name, email, matchId, matchDetails } = await request.json();

    if (!name || !email || !matchId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create Stripe checkout session for waitlist deposit
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'cad',
            product_data: {
              name: 'FIFA 2026 Waitlist Deposit',
              description: `Waitlist deposit for: ${matchDetails}`,
            },
            unit_amount: 999, // $9.99 CAD in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://calendly.com/fwc26info/30min?utm_source=stripe&utm_medium=checkout&utm_campaign=fifa2026',
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://fwc26-project.vercel.app'}/events`,
      customer_email: email,
      metadata: {
        type: 'waitlist_deposit',
        matchId: matchId.toString(),
        matchDetails,
        customerName: name,
      },
      billing_address_collection: 'required',
      // Removed shipping_address_collection to allow any country
    });

    return NextResponse.json(
      { 
        success: true, 
        sessionId: session.id,
        sessionUrl: session.url,
        message: 'Redirecting to payment...'
      },
      { status: 200 }
    );

  } catch (error) {
    // Provide more specific error messages
    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: `Payment error: ${error.message}` },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to create waitlist session. Please try again.' },
      { status: 500 }
    );
  }
}

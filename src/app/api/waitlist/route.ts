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
    console.log('=== WAITLIST API CALLED ===');
    
    // Check if Stripe is properly configured
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('❌ Stripe secret key not configured');
      return NextResponse.json(
        { error: 'Payment service not configured. Please contact support.' },
        { status: 500 }
      );
    }
    
    console.log('✅ Stripe secret key is configured');

    const { name, email, matchId, matchDetails } = await request.json();
    console.log('📝 Request data received:', { name, email, matchId, matchDetails });

    if (!name || !email || !matchId) {
      console.error('❌ Missing required fields:', { name, email, matchId });
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('❌ Invalid email format:', email);
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    console.log('🔄 Creating Stripe checkout session for waitlist...');
    console.log('💰 Amount: $9.99 CAD (999 cents)');

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
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://fwc26-project.vercel.app'}/success?session_id={CHECKOUT_SESSION_ID}&type=waitlist`,
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

    console.log('✅ Stripe session created successfully!');
    console.log('🆔 Session ID:', session.id);
    console.log('🔗 Session URL:', session.url);
    console.log('💰 Amount:', session.amount_total);
    console.log('💳 Payment status:', session.payment_status);

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
    console.error('❌ Waitlist submission error:', error);
    
    // Provide more specific error messages
    if (error instanceof Stripe.errors.StripeError) {
      console.error('🔴 Stripe specific error:', error.type, error.message);
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

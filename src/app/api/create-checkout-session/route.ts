import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(request: NextRequest) {
  try {
    const { serviceName, amount, description, email } = await request.json();

    if (!serviceName || !amount || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
                      price_data: {
              currency: 'cad',
              product_data: {
                name: serviceName,
                description: description,
              },
              unit_amount: amount * 100, // Convert to cents
            },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/book`,
      customer_email: email,
      metadata: {
        serviceName,
        description,
      },
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['CA'],
      },
    });

    return NextResponse.json(
      { sessionId: session.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}

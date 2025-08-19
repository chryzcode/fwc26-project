import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Mailchimp integration
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID || !MAILCHIMP_SERVER_PREFIX) {
      console.error('Mailchimp environment variables not configured');
      return NextResponse.json(
        { error: 'Newsletter service not configured' },
        { status: 500 }
      );
    }

    // Mailchimp requires Basic auth with base64 encoded "anystring:API_KEY"
    const authString = `anystring:${MAILCHIMP_API_KEY}`;
    const base64Auth = Buffer.from(authString).toString('base64');

    const mailchimpEndpoint = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;

    const response = await fetch(mailchimpEndpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${base64Auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: '',
          LNAME: '',
        },
        tags: ['FIFA 2026', 'Business Opportunities'],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Mailchimp API error:', errorData);
      
      // Handle duplicate email gracefully
      if (errorData.title === 'Member Exists') {
        return NextResponse.json(
          { message: 'Thanks for subscribing!' },
          { status: 200 }
        );
      }
      
      return NextResponse.json(
        { error: 'Failed to subscribe to newsletter' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Thanks for subscribing!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

interface EmailData {
  to_email: string;
  to_name: string;
  subject: string;
  html_content: string;
}

export async function sendTransactionalEmail(emailData: EmailData) {
  const MANDRILL_API_KEY = process.env.MANDRILL_API_KEY;

  if (!MANDRILL_API_KEY) {
    console.error('Mandrill configuration missing');
    throw new Error('Mandrill not configured');
  }

  const url = 'https://mandrillapp.com/api/1.0/messages/send.json';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: MANDRILL_API_KEY,
        message: {
          html: emailData.html_content,
          subject: emailData.subject,
          from_email: 'Fwc26info@gmail.com',
          from_name: 'FWC 2026 Business Advantage',
          to: [
            {
              email: emailData.to_email,
              name: emailData.to_name,
              type: 'to',
            },
          ],
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Mandrill API error: ${errorData.message || response.statusText}`
      );
    }

    const result = await response.json();
    console.log('Email sent successfully:', result);
    return result;
  } catch (error) {
    console.error('Error sending email via Mandrill:', error);
    throw error;
  }
}

export function generateWaitlistConfirmationEmail(waitlistData: {
  name: string;
  email: string;
  matchDetails: string;
  amount: number;
  currency: string;
}) {
  const subject = 'FIFA 2026 Waitlist Confirmation - Your Deposit is Confirmed!';
  
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Waitlist Confirmation</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #2563eb; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
        .highlight { background: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .cta { background: #2563eb; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 Waitlist Confirmation!</h1>
          <p>Your FIFA 2026 ticket waitlist deposit is confirmed</p>
        </div>
        
        <div class="content">
          <h2>Hello ${waitlistData.name},</h2>
          
          <p>Thank you for joining our FIFA 2026 ticket waitlist! Your deposit has been successfully processed.</p>
          
          <div class="highlight">
            <h3>📋 Waitlist Details</h3>
            <p><strong>Match:</strong> ${waitlistData.matchDetails}</p>
            <p><strong>Deposit Amount:</strong> ${waitlistData.amount} ${waitlistData.currency}</p>
            <p><strong>Status:</strong> Confirmed ✅</p>
          </div>
          
          <h3>💰 Important Information About Your Deposit</h3>
          <ul>
            <li>Your deposit is <strong>non-refundable</strong></li>
            <li>This deposit is <strong>not part of the ticket cost</strong></li>
            <li>The deposit secures your position on our priority waitlist</li>
          </ul>
          
          <h3>🚀 What Happens Next?</h3>
          <ol>
            <li><strong>Confirmation:</strong> You're now on our priority waitlist</li>
            <li><strong>Active Search:</strong> Our team will actively search for ticket availability</li>
            <li><strong>Notification:</strong> You'll be the first to know when tickets become available</li>
            <li><strong>Purchase:</strong> You'll receive exclusive access to purchase tickets</li>
          </ol>
          
          <div class="highlight">
            <h3>💡 While You Wait...</h3>
            <p>Consider booking a <strong>FIFA 2026 Business Strategy Session</strong> to maximize your opportunities during the World Cup!</p>
            <a href="https://calendly.com/fwc26info/30min" class="cta">Book Strategy Session</a>
          </div>
          
          <h3>📧 Need Help?</h3>
          <p>If you have any questions about your waitlist status, please contact us at <a href="mailto:info@fwc26.ca">info@fwc26.ca</a></p>
          
          <div class="footer">
            <p>FWC 2026 Business Advantage</p>
            <p>Your partner in FIFA 2026 business success</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  return { subject, htmlContent };
}

import mailchimp from '@mailchimp/mailchimp_transactional';

interface EmailData {
  to_email: string;
  to_name: string;
  subject: string;
  html_content: string;
  text_content?: string; // Optional text fallback
  options?: {
    async?: boolean;
    sendAt?: string;
    ipPool?: string;
  };
}

export async function sendTransactionalEmail(emailData: EmailData) {
  const MANDRILL_API_KEY = process.env.MANDRILL_API_KEY;
  const FROM_EMAIL = process.env.MANDRILL_FROM_EMAIL;
  const FROM_NAME = process.env.MANDRILL_FROM_NAME;

  if (!MANDRILL_API_KEY) {
    console.error('Mandrill configuration missing');
    throw new Error('Mandrill not configured');
  }

  // Security validation - ensure API key is not exposed
  if (typeof window !== 'undefined') {
    throw new Error('Mandrill API key should only be used server-side');
  }

  try {
    const mailchimpClient = mailchimp(MANDRILL_API_KEY);

    const response = await mailchimpClient.messages.send({
      message: {
        html: emailData.html_content,
        text: emailData.text_content || undefined, // Use provided text or let Mandrill auto-generate
        subject: emailData.subject,
        from_email: FROM_EMAIL,
        from_name: FROM_NAME,
        to: [
          {
            email: emailData.to_email,
            name: emailData.to_name,
            type: 'to',
          },
        ],
        // Add tracking and metadata
        track_opens: true,
        track_clicks: true,
        auto_text: !emailData.text_content, // Only auto-generate if no text provided
        preserve_recipients: false,
        merge_language: 'mailchimp',
        global_merge_vars: [
          {
            name: 'company_name',
            content: 'FWC26 Marketing Group'
          }
        ],
        metadata: {
          website: 'fwc26.ca',
          source: 'waitlist_confirmation'
        },
        // Disable copy sending to avoid conflicts
        headers: {
          'X-MC-Track': 'opens,clicks'
        }
      },
      // Enable async mode for better performance
      async: emailData.options?.async ?? false,
      // Optional: Set send time (immediate if not specified)
      send_at: emailData.options?.sendAt,
      // IP pool configuration with fallback
      ip_pool: emailData.options?.ipPool ?? 'Main Pool'
    });

    console.log('Email sent successfully:', response);
    
    // Enhanced response validation
    if (Array.isArray(response) && response.length > 0) {
      const [result] = response;
      if (result.status !== 'sent' && result.status !== 'queued') {
        // Log the rejection but don't fail the request
        console.warn(`Mandrill email rejected: ${result.reject_reason || 'unknown error'}`);
        console.warn(`Email to ${result.email} was not delivered`);

        // Return the rejection info but don't throw an error
        return {
          ...response,
          deliveryStatus: 'rejected',
          rejectionReason: result.reject_reason || 'unknown error'
        };
      }
      
      // Log detailed response for debugging
      response.forEach((result: any) => {
        if (result.status === 'sent' || result.status === 'queued') {
          console.log(`Email to ${result.email}: ${result.status}`);
        } else {
          console.warn(`Email to ${result.email} was ${result.status}: ${result.reject_reason}`);
        }
      });
    }
    
    return response;
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
  
  // Generate text fallback
  const textContent = `Hello ${waitlistData.name},

Thank you for joining our FIFA 2026 ticket waitlist! Your deposit has been successfully processed.

Waitlist Details:
- Match: ${waitlistData.matchDetails}
- Deposit Amount: ${waitlistData.amount} ${waitlistData.currency}
- Status: Confirmed ✅

Important Information About Your Deposit:
- Your deposit is non-refundable
- This deposit is not part of the ticket cost
- The deposit secures your position on our priority waitlist

What Happens Next:
1. Confirmation: You're now on our priority waitlist
2. Active Search: Our team will actively search for ticket availability
3. Notification: You'll be the first to know when tickets become available
4. Purchase: You'll receive exclusive access to purchase tickets

While You Wait:
Consider booking a FIFA 2026 Business Strategy Session to maximize your opportunities during the World Cup!
Book at: https://calendly.com/fwc26info/30min

Need Help?
If you have any questions about your waitlist status, please contact us at support@fwc26.ca

FWC 2026 Business Advantage
Your partner in FIFA 2026 business success`;
  
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
          <p>If you have any questions about your waitlist status, please contact us at <a href="mailto:support@fwc26.ca">support@fwc26.ca</a></p>
          
          <div class="footer">
            <p>FWC 2026 Business Advantage</p>
            <p>Your partner in FIFA 2026 business success</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  return { subject, html_content: htmlContent, text_content: textContent };
}

// Bulk email sending function for newsletters or announcements
export async function sendBulkTransactionalEmail(
  recipients: Array<{ email: string; name: string }>,
  subject: string,
  htmlContent: string,
  textContent?: string,
  options?: {
    async?: boolean;
    sendAt?: string;
    ipPool?: string;
  }
) {
  const MANDRILL_API_KEY = process.env.MANDRILL_API_KEY;
  const FROM_EMAIL = 'support@fwc26.ca';
  const FROM_NAME = 'FWC26 Marketing Group';

  if (!MANDRILL_API_KEY) {
    console.error('Mandrill configuration missing');
    throw new Error('Mandrill not configured');
  }

  // Security validation - ensure API key is not exposed
  if (typeof window !== 'undefined') {
    throw new Error('Mandrill API key should only be used server-side');
  }

  try {
    const mailchimpClient = mailchimp(MANDRILL_API_KEY);

    const response = await mailchimpClient.messages.send({
      message: {
        html: htmlContent,
        text: textContent || undefined,
        subject,
        from_email: FROM_EMAIL,
        from_name: FROM_NAME,
        to: recipients.map(recipient => ({
          email: recipient.email,
          name: recipient.name,
          type: 'to',
        })),
        track_opens: true,
        track_clicks: true,
        auto_text: !textContent,
        preserve_recipients: false,
        merge_language: 'mailchimp',
        global_merge_vars: [
          {
            name: 'company_name',
            content: 'FWC26 Marketing Group'
          }
        ],
        metadata: {
          website: 'fwc26.ca',
          source: 'bulk_email'
        },
        headers: {
          'X-MC-Track': 'opens,clicks'
        }
      },
      async: options?.async ?? (recipients.length > 10), // Auto async for >10 recipients
      send_at: options?.sendAt,
      ip_pool: options?.ipPool ?? 'Main Pool', // Use default pool if not specified
    });

    console.log(`Bulk email sent to ${recipients.length} recipients:`, response);
    
    // Enhanced response validation and statistics
    if (Array.isArray(response) && response.length > 0) {
      const stats = {
        total: recipients.length,
        sent: response.filter((r: any) => r.status === 'sent').length,
        queued: response.filter((r: any) => r.status === 'queued').length,
        rejected: response.filter((r: any) => r.status === 'rejected').length,
      };
      
      console.log('Email statistics:', stats);
      
      // Check for any failures and return detailed information
      const failures = response.filter((r: any) => r.status === 'rejected');
      if (failures.length > 0) {
        console.warn(`${failures.length} emails were rejected:`, failures);
      }
      
      return { response, stats, failures };
    }
    
    return { response, stats: { total: recipients.length, sent: 0, queued: 0, rejected: 0 }, failures: [] };
  } catch (error) {
    console.error('Error sending bulk email via Mandrill:', error);
    throw error;
  }
}

// Template email generator for different types of communications
export function generateEmailTemplate(type: 'welcome' | 'reminder' | 'announcement', data: any) {
  // Simple template interpolation function for extensibility
  const interpolate = (template: string, variables: Record<string, any>): string => {
    return template.replace(/\$\{(\w+)\}/g, (match, key) => {
      return variables[key] !== undefined ? variables[key] : match;
    });
  };
  const templates = {
    welcome: {
      subject: 'Welcome to FWC26 - Your FIFA 2026 Business Journey Starts Here!',
      html_content: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to FWC26</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #2563eb; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
            .cta { background: #2563eb; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 Welcome to FWC26!</h1>
              <p>Your FIFA 2026 business advantage starts now</p>
            </div>
            <div class="content">
              <h2>Hello ${data.name},</h2>
              <p>Welcome to the FWC26 community! We're excited to help you maximize your business opportunities during FIFA 2026.</p>
              <a href="https://fwc26.ca/book" class="cta">Book Your Strategy Session</a>
            </div>
          </div>
        </body>
        </html>
      `,
      text_content: `Hello ${data.name},

Welcome to the FWC26 community! We're excited to help you maximize your business opportunities during FIFA 2026.

Book your strategy session: https://fwc26.ca/book

FWC26 Marketing Group`
    },
    reminder: {
      subject: 'FIFA 2026 Reminder - Don\'t Miss Out!',
      html_content: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>FIFA 2026 Reminder</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #dc2626; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
            .cta { background: #dc2626; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>⏰ FIFA 2026 Reminder</h1>
              <p>Time is running out!</p>
            </div>
            <div class="content">
              <h2>Hello ${data.name},</h2>
              <p>This is a friendly reminder about your FIFA 2026 opportunities. Don't miss out on securing your spot!</p>
              <a href="https://fwc26.ca/book" class="cta">Secure Your Spot Now</a>
            </div>
          </div>
        </body>
        </html>
      `,
      text_content: `Hello ${data.name},

This is a friendly reminder about your FIFA 2026 opportunities. Don't miss out on securing your spot!

Secure your spot: https://fwc26.ca/book

FWC26 Marketing Group`
    },
    announcement: {
      subject: 'FIFA 2026 Update - Important Information',
      html_content: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>FIFA 2026 Announcement</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #059669; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
            .cta { background: #059669; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📢 FIFA 2026 Announcement</h1>
              <p>Important update for our community</p>
            </div>
            <div class="content">
              <h2>Hello ${data.name},</h2>
              <p>${data.message || 'We have an important update regarding FIFA 2026 opportunities.'}</p>
              <a href="https://fwc26.ca" class="cta">Learn More</a>
            </div>
          </div>
        </body>
        </html>
      `,
      text_content: `Hello ${data.name},

${data.message || 'We have an important update regarding FIFA 2026 opportunities.'}

Learn more: https://fwc26.ca

FWC26 Marketing Group`
    }
  };

  const template = templates[type];
  
  // Apply interpolation to all template properties
  return {
    subject: interpolate(template.subject, data),
    html_content: interpolate(template.html_content, data),
    text_content: interpolate(template.text_content, data)
  };
}

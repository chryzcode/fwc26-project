// Email automation utilities for FWC26 forms
// This file contains functions to integrate with Mailchimp and Mandrill

import { sendTransactionalEmail } from './mailchimp';

export interface EmailData {
  to: string;
  subject: string;
  template: string;
  data: Record<string, any>;
}

export interface MailingListData {
  email: string;
  firstName: string;
  lastName: string;
  tags: string[];
  customFields: Record<string, any>;
}

// Mailchimp integration using existing configuration
export async function addToMailchimp(data: MailingListData) {
  try {
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;
    const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_SERVER_PREFIX || !MAILCHIMP_LIST_ID) {
      console.warn('Mailchimp credentials not configured');
      return null;
    }

    // Use Basic auth as per existing configuration
    const authString = `anystring:${MAILCHIMP_API_KEY}`;
    const base64Auth = Buffer.from(authString).toString('base64');

    const response = await fetch(
      `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${base64Auth}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: data.email,
          status: 'subscribed',
          merge_fields: {
            FNAME: data.firstName,
            LNAME: data.lastName,
            ...data.customFields
          },
          tags: data.tags
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Mailchimp API error: ${errorData.detail || response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Mailchimp integration error:', error);
    return null;
  }
}

// Send confirmation email using existing Mandrill configuration
export async function sendConfirmationEmail(emailData: EmailData) {
  try {
    const htmlContent = generateEmailTemplate(emailData.template, emailData.data);
    const textContent = generateTextTemplate(emailData.template, emailData.data);

    const mandrillEmailData = {
      to_email: emailData.to,
      to_name: emailData.data.name || 'Valued Customer',
      subject: emailData.subject,
      html_content: htmlContent,
      text_content: textContent,
      options: {
        async: true // Send asynchronously for better performance
      }
    };

    const result = await sendTransactionalEmail(mandrillEmailData);
    console.log('Confirmation email sent successfully:', result);
    
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Email sending error:', error);
    return null;
  }
}

// Generate email templates
export function generateEmailTemplate(template: string, data: Record<string, any>): string {
  switch (template) {
    case 'small-business-welcome':
      return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2563eb;">Welcome to the FWC26 Small Business Initiative Program!</h1>
          <p>Hi ${data.name},</p>
          <p>Thank you for registering for the FWC26 Small Business Initiative Program (SBIP)!</p>
          <p>You're now part of a movement helping Toronto's small businesses harness the global spotlight of the FIFA World Cup 2026™.</p>
          <p>Our goal is to empower local entrepreneurs with marketing support, partnership opportunities, and visibility during the games.</p>
          
          <h2 style="color: #2563eb;">Next Steps:</h2>
          <ol>
            <li>Review the attached Program Guidelines & FAQ to understand participation criteria and upcoming milestones.</li>
            <li>Complete the Small Business Readiness Form (link below).</li>
            <li>Join our email list for curated updates, workshops, and vendor spotlights.</li>
          </ol>
          
          <p><strong>Program Launch Date: February 17, 2026</strong><br>
          Stay tuned for important onboarding updates as we move toward kickoff.</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://calendly.com/fwc26info/small-business-consultation" 
               style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 10px;">
              👉 Complete Readiness Form
            </a>
            <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.fwc26.ca'}/newsletter" 
               style="background-color: #059669; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 10px;">
              👉 Join the SBIP Mailing List
            </a>
          </div>
          
          <div style="text-align: center; margin: 20px 0;">
            <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.fwc26.ca'}/docs/FWC26_SBIP_Guidelines_and_FAQ.pdf" 
               style="background-color: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              📄 Download Program Guidelines & FAQ
            </a>
          </div>
          
          <p><strong>For support or inquiries:</strong><br>
          ■ support@fwc26.ca<br>
          ■ www.fwc26.ca | Instagram: @fwc26_canada</p>
          
          <p>Warm regards,<br>FWC26 SBIP / Support team</p>
        </div>
      `;

    case 'vendor-initiative-welcome':
      return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #1f2937;">Welcome to the FWC26 Vendor Support Program!</h1>
          <p>Hi ${data.name},</p>
          <p>Thank you for registering for the FWC26 Vendor Support Program (VSP) — your first step toward participating in one of the most exciting business opportunities leading up to the FIFA World Cup 2026™ in Toronto!</p>
          <p>We're thrilled to have you join this growing community of local vendors, suppliers, and entrepreneurs preparing to showcase their products and services during the global celebration.</p>
          
          <h2 style="color: #1f2937;">Next Steps:</h2>
          <ol>
            <li>Review the Program Guidelines PDF (attached), which includes timelines, eligibility details, and FAQ answers.</li>
            <li>Confirm your business profile via the vendor intake form (link below).</li>
            <li>Join our official email list to stay up-to-date on training sessions, procurement alerts, and pre-launch workshops.</li>
          </ol>
          
          <p><strong>Program Launch Date: March 3, 2026</strong><br>
          Make sure you're ready before then; the necessary pre-qualification and compliance steps will open soon.</p>
          
          <div style="text-align: center; margin: 20px 0;">
            <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.fwc26.ca'}/docs/FWC26_VSP_Guidelines_and_FAQ.pdf" 
               style="background-color: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              📄 Download Program Guidelines & FAQ
            </a>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://calendly.com/fwc26info/vsp-pre-onboarding-consultation" 
               style="background-color: #1f2937; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 10px;">
              👉 Complete Vendor Profile
            </a>
            <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.fwc26.ca'}/newsletter" 
               style="background-color: #059669; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 10px;">
              👉 Join Our Email List
            </a>
          </div>
          
          <p>Warm Regards,<br>FWC26 Vendor support program / Support team</p>
        </div>
      `;

    default:
      return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1>Thank you for your interest in FWC26!</h1>
          <p>Hi ${data.name},</p>
          <p>Thank you for your interest in our FIFA 2026 business programs. We'll be in touch soon with more information.</p>
          <p>Best regards,<br>The FWC26 Team</p>
        </div>
      `;
  }
}

// Generate text version of email templates
export function generateTextTemplate(template: string, data: Record<string, any>): string {
  switch (template) {
    case 'small-business-welcome':
      return `
Welcome to the FWC26 Small Business Initiative Program!

Hi ${data.name},

Thank you for registering for the FWC26 Small Business Initiative Program (SBIP)!

You're now part of a movement helping Toronto's small businesses harness the global spotlight of the FIFA World Cup 2026™.

Our goal is to empower local entrepreneurs with marketing support, partnership opportunities, and visibility during the games.

Next Steps:
1. Review the attached Program Guidelines & FAQ to understand participation criteria and upcoming milestones.
2. Complete the Small Business Readiness Form (link below).
3. Join our email list for curated updates, workshops, and vendor spotlights.

Program Launch Date: February 17, 2026
Stay tuned for important onboarding updates as we move toward kickoff.

Complete Readiness Form: https://calendly.com/fwc26info/small-business-consultation
Join the SBIP Mailing List: ${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.fwc26.ca'}/newsletter

Download Program Guidelines & FAQ: ${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.fwc26.ca'}/docs/FWC26_SBIP_Guidelines_and_FAQ.pdf

For support or inquiries:
■ support@fwc26.ca
■ www.fwc26.ca | Instagram: @fwc26_canada

Warm regards,
FWC26 SBIP / Support team
      `;

    case 'vendor-initiative-welcome':
      return `
Welcome to the FWC26 Vendor Support Program!

Hi ${data.name},

Thank you for registering for the FWC26 Vendor Support Program (VSP) — your first step toward participating in one of the most exciting business opportunities leading up to the FIFA World Cup 2026™ in Toronto!

We're thrilled to have you join this growing community of local vendors, suppliers, and entrepreneurs preparing to showcase their products and services during the global celebration.

Next Steps:
1. Review the Program Guidelines PDF (attached), which includes timelines, eligibility details, and FAQ answers.
2. Confirm your business profile via the vendor intake form (link below).
3. Join our official email list to stay up-to-date on training sessions, procurement alerts, and pre-launch workshops.

Program Launch Date: March 3, 2026
Make sure you're ready before then; the necessary pre-qualification and compliance steps will open soon.

Complete Vendor Profile: https://calendly.com/fwc26info/vsp-pre-onboarding-consultation
Join Our Email List: ${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.fwc26.ca'}/newsletter

Download Program Guidelines & FAQ: ${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.fwc26.ca'}/docs/FWC26_VSP_Guidelines_and_FAQ.pdf

Warm Regards,
FWC26 Vendor support program / Support team
      `;

    default:
      return `
Thank you for your interest in FWC26!

Hi ${data.name},

Thank you for your interest in our FIFA 2026 business programs. We'll be in touch soon with more information.

Best regards,
The FWC26 Team
      `;
  }
}

// Trigger automation workflow
export async function triggerAutomationWorkflow(data: MailingListData, programType: 'small-business' | 'vendor-initiative') {
  try {
    // Add to mailing list
    await addToMailchimp(data);

    // Send confirmation email
    const emailData: EmailData = {
      to: data.email,
      subject: programType === 'small-business' 
        ? 'Welcome to FWC26 Small Business Initiative Program!'
        : 'Welcome to FWC26 Canadian Vendor Initiative Program!',
      template: programType === 'small-business' ? 'small-business-welcome' : 'vendor-initiative-welcome',
      data: {
        name: data.firstName,
        businessName: data.customFields.businessName,
        businessType: data.customFields.businessType,
        city: data.customFields.city || 'your city'
      }
    };

    await sendConfirmationEmail(emailData);

    return { success: true };
  } catch (error) {
    console.error('Automation workflow error:', error);
    return { success: false, error };
  }
}

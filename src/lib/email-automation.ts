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
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">Welcome to FWC26 Small Business Initiative Program!</h1>
          <p>Hi ${data.name},</p>
          <p>Thank you for registering for the FWC26 Small Business Initiative Program. We're excited to help your business, <strong>${data.businessName}</strong>, capitalize on FIFA 2026 opportunities in ${data.city}.</p>
          
          <h2>What's Next?</h2>
          <ol>
            <li>Schedule your consultation with our team</li>
            <li>Receive your personalized business assessment</li>
            <li>Get started with your FIFA 2026 strategy</li>
          </ol>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://calendly.com/fwc26info/small-business-consultation" 
               style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Schedule Your Consultation
            </a>
          </div>
          
          <p>We'll be in touch within 24 hours with more information about the program and next steps.</p>
          
          <p>Best regards,<br>The FWC26 Team</p>
        </div>
      `;

    case 'vendor-initiative-welcome':
      return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1f2937;">Welcome to FWC26 Canadian Vendor Initiative Program!</h1>
          <p>Hi ${data.name},</p>
          <p>Thank you for pre-registering for the FWC26 Canadian Vendor Initiative Program. We're excited to help your business, <strong>${data.businessName}</strong>, navigate FIFA 2026 vendor requirements in ${data.city}.</p>
          
          <h2>What's Next?</h2>
          <ol>
            <li>Schedule your vendor consultation</li>
            <li>Receive your vendor readiness assessment</li>
            <li>Get guidance on permits and licensing</li>
          </ol>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://calendly.com/fwc26info/vendor-consultation" 
               style="background-color: #1f2937; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Schedule Your Consultation
            </a>
          </div>
          
          <p>We'll be in touch within 24 hours with more information about the program and next steps.</p>
          
          <p>Best regards,<br>The FWC26 Team</p>
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
Welcome to FWC26 Small Business Initiative Program!

Hi ${data.name},

Thank you for registering for the FWC26 Small Business Initiative Program. We're excited to help your business, ${data.businessName}, capitalize on FIFA 2026 opportunities in ${data.city}.

What's Next?
1. Schedule your consultation with our team
2. Receive your personalized business assessment
3. Get started with your FIFA 2026 strategy

Schedule Your Consultation: https://calendly.com/fwc26info/small-business-consultation

We'll be in touch within 24 hours with more information about the program and next steps.

Best regards,
The FWC26 Team
      `;

    case 'vendor-initiative-welcome':
      return `
Welcome to FWC26 Canadian Vendor Initiative Program!

Hi ${data.name},

Thank you for pre-registering for the FWC26 Canadian Vendor Initiative Program. We're excited to help your business, ${data.businessName}, navigate FIFA 2026 vendor requirements in ${data.city}.

What's Next?
1. Schedule your vendor consultation
2. Receive your vendor readiness assessment
3. Get guidance on permits and licensing

Schedule Your Consultation: https://calendly.com/fwc26info/vendor-consultation

We'll be in touch within 24 hours with more information about the program and next steps.

Best regards,
The FWC26 Team
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

// Cron job system for FWC26 email automation
import { sendFollowUpEmail } from './email-automation';

export interface ScheduledEmail {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  customFields: Record<string, any>;
  scheduledFor: Date;
  emailType: 'vendor-initiative-followup' | 'small-business-followup';
  sent: boolean;
  createdAt: Date;
}

// In-memory storage for demo purposes
// In production, use a proper database
const scheduledEmails: ScheduledEmail[] = [];

// Add scheduled email to queue
export function addScheduledEmail(emailData: ScheduledEmail): void {
  scheduledEmails.push(emailData);
  console.log(`Email scheduled for ${emailData.email} at ${emailData.scheduledFor}`);
}

// Process scheduled emails (to be called by cron job)
export async function processScheduledEmails(): Promise<void> {
  const now = new Date();
  const emailsToSend = scheduledEmails.filter(
    email => !email.sent && email.scheduledFor <= now
  );

  console.log(`Processing ${emailsToSend.length} scheduled emails`);

  for (const emailData of emailsToSend) {
    try {
      await sendFollowUpEmail({
        email: emailData.email,
        firstName: emailData.firstName,
        lastName: emailData.lastName,
        tags: [emailData.emailType],
        customFields: emailData.customFields
      }, emailData.emailType);

      // Mark as sent
      emailData.sent = true;
      console.log(`Follow-up email sent to ${emailData.email}`);
    } catch (error) {
      console.error(`Failed to send email to ${emailData.email}:`, error);
    }
  }
}

// Get scheduled emails (for admin dashboard)
export function getScheduledEmails(): ScheduledEmail[] {
  return scheduledEmails.filter(email => !email.sent);
}

// Clean up old sent emails (optional)
export function cleanupOldEmails(): void {
  const cutoffDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000); // 30 days ago
  const initialLength = scheduledEmails.length;
  
  // Remove old sent emails
  for (let i = scheduledEmails.length - 1; i >= 0; i--) {
    if (scheduledEmails[i].sent && scheduledEmails[i].createdAt < cutoffDate) {
      scheduledEmails.splice(i, 1);
    }
  }
  
  console.log(`Cleaned up ${initialLength - scheduledEmails.length} old emails`);
}

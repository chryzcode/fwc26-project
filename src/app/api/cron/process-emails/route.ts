import { NextRequest, NextResponse } from 'next/server';
import { processScheduledEmails, cleanupOldEmails } from '@/lib/cron-jobs';

export async function GET(request: NextRequest) {
  try {
    // Check for authorization (in production, use proper auth)
    const authHeader = request.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET;
    
    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Process scheduled emails
    await processScheduledEmails();
    
    // Clean up old emails
    cleanupOldEmails();

    return NextResponse.json({ 
      success: true, 
      message: 'Cron job executed successfully',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Cron job error:', error);
    return NextResponse.json(
      { error: 'Cron job failed', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// Allow POST for external cron services
export async function POST(request: NextRequest) {
  return GET(request);
}

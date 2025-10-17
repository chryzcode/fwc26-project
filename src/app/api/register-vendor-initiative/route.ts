import { NextRequest, NextResponse } from 'next/server';
import { triggerAutomationWorkflow } from '@/lib/email-automation';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'businessName', 'businessType', 'city', 'businessDescription', 'objectives'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Prepare mailing list data
    const mailingListData = {
      email: formData.email,
      firstName: formData.name.split(' ')[0],
      lastName: formData.name.split(' ').slice(1).join(' '),
      tags: ['vendor-initiative', 'fifa-2026', formData.city.toLowerCase()],
      customFields: {
        businessName: formData.businessName,
        businessType: formData.businessType,
        phone: formData.phone,
        businessDescription: formData.businessDescription,
        objectives: formData.objectives,
        city: formData.city
      }
    };

    // Trigger automation workflow (email + mailing list)
    await triggerAutomationWorkflow(mailingListData, 'vendor-initiative');

    console.log('Vendor Initiative Pre-Registration processed:', formData);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Pre-registration successful! Check your email for next steps.',
        calendlyUrl: 'https://calendly.com/fwc26info/vendor-consultation'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Pre-registration error:', error);
    return NextResponse.json(
      { error: 'Failed to process pre-registration. Please try again.' },
      { status: 500 }
    );
  }
}

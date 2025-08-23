"use client";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function SuccessPageContent() {
  const searchParams = useSearchParams();
  const [paymentType, setPaymentType] = useState<'consultation' | 'waitlist'>('consultation');
  
  useEffect(() => {
    const type = searchParams.get('type');
    if (type === 'waitlist') {
      setPaymentType('waitlist');
    }
  }, [searchParams]);

  if (paymentType === 'waitlist') {
    return (
      <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center px-6 py-12">
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Waitlist Deposit Successful!
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Thank you for your $9.99 CAD deposit! You're now on the waitlist for FIFA 2026 tickets. We'll notify you as soon as tickets become available.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What Happens Next?
            </h2>
            
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Confirmation Email</h3>
                  <p className="text-gray-600">You'll receive a confirmation email with your waitlist details.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">We Search for Tickets</h3>
                  <p className="text-gray-600">Our team will actively search for ticket availability from verified sources.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Get Notified</h3>
                  <p className="text-gray-600">When tickets become available, you'll be the first to know!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center"> 
            <Link
              href="/events"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200"
            >
              Browse More Matches
            </Link>
            
            <Link
              href="/book"
              className="px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-200"
            >
              Book Business Consultation
            </Link>
            
            <Link
              href="/"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Return to Home
            </Link>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <p>Questions? Contact us at <a href="mailto:info@fwc26.ca" className="text-blue-600 hover:underline">info@fwc26.ca</a></p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center px-6 py-12">
        <div className="mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Payment Successful!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your payment! Your FIFA 2026 business consultation has been confirmed. You can schedule your meeting immediately or we'll contact you within 24 hours.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What Happens Next?
          </h2>
          
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-600 text-sm font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Confirmation Email</h3>
                <p className="text-gray-600">You'll receive a confirmation email with your booking details.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-600 text-sm font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Strategy Session</h3>
                <p className="text-gray-600">Our team will contact you within 24 hours to schedule your consultation.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-600 text-sm font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Business Growth</h3>
                <p className="text-gray-600">Start implementing your FIFA 2026 business strategy and watch your revenue grow!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center"> 
          <a
            href="https://calendly.com/fwc26info/30min?utm_source=stripe&utm_medium=checkout&utm_campaign=fifa2026"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200"
          >
            Schedule Strategy Session (Tier 1)
          </a>
          
          <a
            href="https://calendly.com/fwc26info/full-monetization-blueprint-tier-2?utm_source=stripe&utm_medium=checkout&utm_campaign=fifa2026"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-200"
            >
            Schedule Monetization Blueprint (Tier 2)
          </a>
          
          <a
            href="https://calendly.com/fwc26info/business-launch-support-tier-3?utm_source=stripe&utm_medium=checkout&utm_campaign=fifa2026"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all duration-200"
          >
            Schedule Full-Service Launch (Tier 3)
          </a>
          
          <Link
            href="/about-us"
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-200"
          >
            Learn More About Our Services
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>Questions? Contact us at <a href="mailto:info@fwc26.ca" className="text-blue-600 hover:underline">info@fwc26.ca</a></p>
        </div>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </main>
    }>
      <SuccessPageContent />
    </Suspense>
  );
}

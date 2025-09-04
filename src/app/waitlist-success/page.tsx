"use client";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// Force dynamic rendering to prevent build-time prerendering
export const dynamic = 'force-dynamic';

function WaitlistSuccessContent() {
  const searchParams = useSearchParams();
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isConfirming, setIsConfirming] = useState(false);
  const [confirmationStatus, setConfirmationStatus] = useState<'pending' | 'success' | 'error'>('pending');

  useEffect(() => {
    const session = searchParams.get('session_id');
    setSessionId(session);
    
    if (session) {
      confirmWaitlistPayment(session);
    }
  }, [searchParams]);

  const confirmWaitlistPayment = async (sessionId: string) => {
    setIsConfirming(true);
    try {
      const response = await fetch('/api/confirm-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sessionId }),
      });

      if (response.ok) {
        setConfirmationStatus('success');
        console.log('Waitlist payment confirmed successfully');
      } else {
        setConfirmationStatus('error');
        console.error('Failed to confirm waitlist payment');
      }
    } catch (error) {
      console.error('Error confirming waitlist payment:', error);
      setConfirmationStatus('error');
    } finally {
      setIsConfirming(false);
    }
  };

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
            Waitlist Deposit Successful! 🎉
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your $9.99 CAD deposit! You're now on our priority waitlist for FIFA 2026 tickets.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            📧 Check Your Email!
          </h2>
          
          {isConfirming && (
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 text-left">
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 mr-3"></div>
                <p className="text-blue-700">Confirming your payment and sending confirmation email...</p>
              </div>
            </div>
          )}
          
          {confirmationStatus === 'success' && (
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6 text-left">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-700">
                    <strong>Success!</strong> Your payment has been confirmed and confirmation email sent.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {confirmationStatus === 'error' && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 text-left">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">
                    <strong>Note:</strong> There was an issue confirming your payment, but please check your email for confirmation.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          <p className="text-lg text-gray-700 mb-6">
            We've sent you a confirmation email with all the details about your waitlist enrollment.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 text-left">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  <strong>Important:</strong> Please check your spam/junk folder if you don't see the email within a few minutes.
                </p>
              </div>
            </div>
          </div>
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
                <h3 className="font-semibold text-gray-900">Email Confirmation</h3>
                <p className="text-gray-600">You'll receive a detailed confirmation email with your waitlist details.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-600 text-sm font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Active Ticket Search</h3>
                <p className="text-gray-600">Our team will actively search for ticket availability from verified sources.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-600 text-sm font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Priority Notification</h3>
                <p className="text-gray-600">When tickets become available, you'll be the first to know!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            💰 About Your Deposit
          </h2>
          
          <div className="space-y-3 text-left">
            <div className="flex items-start gap-3">
              <span className="text-green-600 mt-1">✅</span>
              <span className="text-gray-700">Your deposit secures your position on our priority waitlist</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-600 mt-1">⚠️</span>
              <span className="text-gray-700">This deposit is non-refundable</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">ℹ️</span>
              <span className="text-gray-700">The deposit is not part of the ticket cost</span>
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
            Book FIFA 2026 Strategy Session
          </a>
          
          <Link
            href="/events"
            className="px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-200"
          >
            Browse More Matches
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
          {sessionId && (
            <p className="mt-2">Reference ID: <span className="font-mono text-gray-600">{sessionId}</span></p>
          )}
        </div>
      </div>
    </main>
  );
}

export default function WaitlistSuccessPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </main>
    }>
      <WaitlistSuccessContent />
    </Suspense>
  );
}

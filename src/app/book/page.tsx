
"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function BookContent() {
  const searchParams = useSearchParams();
  const [showPayment, setShowPayment] = useState(false);
  const [serviceDetails, setServiceDetails] = useState<{
    service: string;
    amount: number;
    description: string;
    tier: number;
  } | null>(null);

  useEffect(() => {
    // Check if user is coming from Calendly with payment details
    const service = searchParams.get('service');
    const amount = searchParams.get('amount');
    const description = searchParams.get('description');
    const tier = searchParams.get('tier');

    if (service && amount && description) {
      setServiceDetails({
        service,
        amount: parseFloat(amount),
        description,
        tier: parseInt(tier || '1')
      });
      setShowPayment(true);
    }
  }, [searchParams]);

  const handlePayment = async () => {
    if (!serviceDetails) return;

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceName: serviceDetails.service,
          amount: serviceDetails.amount,
          description: serviceDetails.description,
          email: 'customer@example.com',
          tier: serviceDetails.tier,
          calendlyUrl: 'https://calendly.com/fwc26info/30min?utm_source=stripe&utm_medium=checkout&utm_campaign=fifa2026'
        })
      });
      
      const data = await response.json();
      
      if (response.ok && data.sessionUrl) {
        // Open Stripe checkout
        window.open(data.sessionUrl, '_blank');
      } else {
        throw new Error(data.error || 'Failed to create payment session');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    }
  };
  return (
    <main className="bg-white">
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center min-h-[70vh] text-center animate-fade-in overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-32 -right-24 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-2000" />
        
        {showPayment && serviceDetails ? (
          <>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-6 animate-fade-in">
              Complete Your Payment
            </h1>
            <p className="text-gray-700 mb-10 max-w-xl text-lg animate-fade-in">
              Thank you for booking! Now complete your payment for the {serviceDetails.service}.
            </p>
            
            {/* Payment Summary */}
            <div className="rounded-2xl bg-white/90 w-full max-w-2xl mb-8 p-8 shadow-xl animate-fade-in">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">{serviceDetails.service}</h2>
              <p className="text-gray-700 mb-4">{serviceDetails.description}</p>
              <div className="text-3xl font-bold text-blue-600 mb-6">
                ${serviceDetails.amount} CAD
              </div>
              
              <button
                onClick={handlePayment}
                className="w-full px-8 py-4 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Complete Payment
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-6 animate-fade-in">
              Book Your FIFA 2026 Strategy Session
            </h1>
            <p className="text-gray-700 mb-10 max-w-xl text-lg animate-fade-in">
              Secure your spot for a 30-minute strategy session to monetize FIFA 2026 opportunities in Toronto and Vancouver.
            </p>
            
            {/* Calendly Embed */}
            <div className="rounded-2xl bg-white/90 w-full max-w-4xl mb-8 flex flex-col items-center justify-center shadow-xl animate-fade-in overflow-hidden">
              <iframe
                src="https://calendly.com/fwc26info/30min?embed=true"
                width="100%"
                height="700"
                frameBorder="0"
                title="Book FIFA 2026 Strategy Session"
                className="rounded-2xl"
              />
            </div>
            
            {/* Direct Booking CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a
                href="/about-us"
                className="px-8 py-4 rounded-xl font-semibold text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Learn More About Our Services
              </a>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default function Book() {
  return (
    <Suspense fallback={
      <main className="bg-white">
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center min-h-[70vh] text-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-6">
              Loading...
            </h1>
            <p className="text-gray-700 text-lg">
              Please wait while we load your booking page.
            </p>
          </div>
        </section>
      </main>
    }>
      <BookContent />
    </Suspense>
  );
}

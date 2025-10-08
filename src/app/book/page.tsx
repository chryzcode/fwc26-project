
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
  const [paymentOption, setPaymentOption] = useState<'full' | 'installments'>('full');
  const [calendlyUrl, setCalendlyUrl] = useState(`${process.env.NEXT_PUBLIC_CALENDLY_TIER1_URL || 'https://calendly.com/fwc26info/30min'}?embed=true`);
  const [serviceTitle, setServiceTitle] = useState('Book Your FIFA 2026 Strategy Session');
  const [serviceDescription, setServiceDescription] = useState('Secure your spot for a 30-minute strategy session to monetize FIFA 2026 opportunities in Toronto and Vancouver.');

  // Set default service (Tier 1) on component mount
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (!serviceParam) {
      // Default to tier 1 if no service parameter
      setCalendlyUrl(`${process.env.NEXT_PUBLIC_CALENDLY_TIER1_URL || 'https://calendly.com/fwc26info/30min'}?embed=true`);
      setServiceTitle('Book Your FIFA 2026 Strategy Session');
      setServiceDescription('Secure your spot for a 30-minute strategy session to monetize FIFA 2026 opportunities in Toronto and Vancouver.');
    }
  }, []);

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
    } else {
      // Handle service parameter for Calendly embedding
      const serviceParam = searchParams.get('service');
      if (serviceParam) {
        switch (serviceParam) {
          case 'tier2':
            setCalendlyUrl(`${process.env.NEXT_PUBLIC_CALENDLY_TIER2_URL || 'https://calendly.com/fwc26info/full-monetization-blueprint-tier-2'}?embed=true`);
            setServiceTitle('Book Your Monetization Blueprint Session');
            setServiceDescription('Secure your spot for a comprehensive monetization blueprint session to maximize your FIFA 2026 revenue opportunities.');
            break;
          case 'tier3':
            setCalendlyUrl(`${process.env.NEXT_PUBLIC_CALENDLY_TIER3_URL || 'https://calendly.com/fwc26info/business-launch-support-tier-3'}?embed=true`);
            setServiceTitle('Book Your Full-Service Launch Session');
            setServiceDescription('Secure your spot for a full-service launch session to get complete support for your FIFA 2026 business launch.');
            break;
          default:
            // Default to tier 1
            setCalendlyUrl(`${process.env.NEXT_PUBLIC_CALENDLY_TIER1_URL || 'https://calendly.com/fwc26info/30min'}?embed=true`);
            setServiceTitle('Book Your FIFA 2026 Strategy Session');
            setServiceDescription('Secure your spot for a 30-minute strategy session to monetize FIFA 2026 opportunities in Toronto and Vancouver.');
        }
      }
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
          amount: paymentOption === 'installments' ? Math.ceil(serviceDetails.amount / (serviceDetails.tier === 2 ? 2 : 4)) : serviceDetails.amount,
          description: serviceDetails.description,
          email: 'customer@example.com',
          tier: serviceDetails.tier,
          paymentOption: paymentOption,
          totalAmount: serviceDetails.amount,
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
              
              {/* Payment Options */}
              {serviceDetails.tier === 2 || serviceDetails.tier === 3 ? (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Payment Options</h3>
                  <div className="space-y-3">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="paymentOption"
                        value="full"
                        checked={paymentOption === 'full'}
                        onChange={(e) => setPaymentOption(e.target.value as 'full' | 'installments')}
                        className="mr-3"
                      />
                      <div>
                        <span className="font-medium">Pay in Full</span>
                        <div className="text-2xl font-bold text-blue-600">${serviceDetails.amount} CAD</div>
                      </div>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="paymentOption"
                        value="installments"
                        checked={paymentOption === 'installments'}
                        onChange={(e) => setPaymentOption(e.target.value as 'full' | 'installments')}
                        className="mr-3"
                      />
                      <div>
                        <span className="font-medium">
                          {serviceDetails.tier === 2 ? '2 Installments' : '4 Installments'}
                        </span>
                        <div className="text-2xl font-bold text-blue-600">
                          ${Math.ceil(serviceDetails.amount / (serviceDetails.tier === 2 ? 2 : 4))} CAD each
                        </div>
                        <div className="text-sm text-gray-600">
                          Total: ${serviceDetails.amount} CAD
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              ) : (
                <div className="text-3xl font-bold text-blue-600 mb-6">
                  ${serviceDetails.amount} CAD
                </div>
              )}
              
              <button
                onClick={handlePayment}
                className="w-full px-8 py-4 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {paymentOption === 'installments' ? 'Start Payment Plan' : 'Complete Payment'}
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-6 animate-fade-in">
              {serviceTitle}
            </h1>
            <p className="text-gray-700 mb-10 max-w-xl text-lg animate-fade-in">
              {serviceDescription}
            </p>
            
            {/* Calendly Embed */}
            <div className="rounded-2xl bg-white/90 w-full max-w-4xl mb-8 flex flex-col items-center justify-center shadow-xl animate-fade-in overflow-hidden">
              <iframe
                src={calendlyUrl}
                width="100%"
                height="700"
                frameBorder="0"
                title={serviceTitle}
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

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Payment Successful | FIFA 2026 Business Consulting",
  description: "Thank you for your payment. Your FIFA 2026 business consultation has been confirmed.",
};

export default function SuccessPage() {
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
            Schedule Your Consultation Now
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

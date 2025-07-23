"use client";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="bg-white">
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center min-h-[70vh] text-center animate-fade-in overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-32 -right-24 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-2000" />
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 animate-fade-in flex items-center gap-2 justify-center">
          <span className="inline-block bg-blue-100 p-2 rounded-full"><Image src="/globe.svg" alt="Contact" width={32} height={32} /></span>
          Contact Us
        </h1>
        <p className="text-blue-800 mb-10 max-w-xl text-lg animate-fade-in">
          Let’s Build Your FIFA Strategy. Fill out the form and our team will get in touch!
        </p>
        {!submitted ? (
          <form
            className="rounded-2xl bg-white/80 w-full max-w-lg shadow-lg p-8 flex flex-col gap-5 animate-fade-in"
            onSubmit={e => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="flex items-center gap-2">
              <Image src="/file.svg" alt="Name" width={24} height={24} />
              <input type="text" placeholder="Name" required className="flex-1 p-4 rounded border border-blue-200 focus:ring-2 focus:ring-accent text-lg" />
            </div>
            <div className="flex items-center gap-2">
              <Image src="/file.svg" alt="Company" width={24} height={24} />
              <input type="text" placeholder="Company Name" className="flex-1 p-4 rounded border border-blue-200 focus:ring-2 focus:ring-accent text-lg" />
            </div>
            <div className="flex items-center gap-2">
              <Image src="/file.svg" alt="Email" width={24} height={24} />
              <input type="email" placeholder="Email" required className="flex-1 p-4 rounded border border-blue-200 focus:ring-2 focus:ring-accent text-lg" />
            </div>
            <div className="flex items-center gap-2">
              <Image src="/file.svg" alt="Phone" width={24} height={24} />
              <input type="tel" placeholder="Phone Number" className="flex-1 p-4 rounded border border-blue-200 focus:ring-2 focus:ring-accent text-lg" />
            </div>
            <div className="flex items-start gap-2">
              <Image src="/file.svg" alt="Inquiry" width={24} height={24} className="mt-2" />
              <textarea placeholder="Describe your company. Tell us about your inquiry." required className="flex-1 p-4 rounded border border-blue-200 min-h-[100px] focus:ring-2 focus:ring-accent text-lg" />
            </div>
            <button type="submit" className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 text-lg mt-4">Submit</button>
          </form>
        ) : (
          <div className="rounded-2xl bg-white/80 w-full max-w-lg shadow-lg p-8 mt-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-blue-900 mb-3 flex items-center gap-2 justify-center">
              <Image src="/globe.svg" alt="Thank you" width={28} height={28} />
              Thank you!
            </h2>
            <p className="text-blue-800 text-lg">We’ve received your inquiry and will be in touch soon.</p>
          </div>
        )}
        {/* Chat Widget Placeholder */}
        <div className="mt-10 rounded-2xl bg-white/80 w-full max-w-lg shadow-lg p-4 border border-blue-100 text-blue-400 animate-fade-in flex items-center gap-2">
          <Image src="/file.svg" alt="Chat" width={24} height={24} />
          Chat Widget Placeholder
        </div>
        {/* Newsletter Signup Placeholder */}
        <div className="mt-4 rounded-2xl bg-white/80 w-full max-w-lg shadow-lg p-4 border border-blue-100 text-blue-400 animate-fade-in flex items-center gap-2">
          <Image src="/file.svg" alt="Newsletter" width={24} height={24} />
          Newsletter Signup Placeholder
        </div>
        {/* Countdown Timer Placeholder */}
        <div className="mt-4 rounded-2xl bg-white/80 w-full max-w-lg shadow-lg p-4 border border-blue-100 text-blue-400 animate-fade-in flex items-center gap-2">
          <Image src="/file.svg" alt="Countdown" width={24} height={24} />
          Countdown Timer to FIFA 2026 Kickoff Placeholder
        </div>
      </section>
    </main>
  );
}

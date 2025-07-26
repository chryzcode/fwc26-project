import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import ContactForm from "@/components/ContactForm";
import NewsletterSignup from "@/components/NewsletterSignup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FIFA 2026 Biz Advantage | Business & Marketing Consultancy",
  description:
    "Monetization strategy consulting for entrepreneurs and businesses during the FIFA World Cup 2026 in Vancouver and Toronto.",
  keywords: [
    "FIFA 2026",
    "Business Consulting",
    "Monetization",
    "Vancouver",
    "Toronto",
    "World Cup",
    "Strategy",
    "Entrepreneurs",
    "Small Business",
  ],
  openGraph: {
    title: "FIFA 2026 Biz Advantage | Business & Marketing Consultancy",
    description:
      "Monetization strategy consulting for entrepreneurs and businesses during the FIFA World Cup 2026 in Vancouver and Toronto.",
    url: "https://www.fwc26.ca/",
    siteName: "FIFA 2026 Biz Advantage",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-white text-blue-900`}
      >
        <NavBar />
        {children}
        <footer className="mt-16 bg-white text-blue-900 px-4 py-12 border-t border-blue-100 shadow-inner">
  <div id="contact" className="max-w-3xl mx-auto flex flex-col gap-12 items-center text-center">
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <ContactForm />
    </div>
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <NewsletterSignup />
      <p className="mt-6 text-sm max-w-md">
        Stay updated with the latest strategies and opportunities for FIFA 2026 business success.
      </p>
    </div>
  </div>
  <div className="mt-12 text-center text-xs">
    &copy; {new Date().getFullYear()} FWC 2026 Biz Advantage. All rights reserved.
  </div>
</footer>

      </body>
    </html>
  );
}

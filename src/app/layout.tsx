import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import ContactForm from "@/components/ContactForm";
import NewsletterSignup from "@/components/NewsletterSignup";
import LiveChatWidget from "@/components/LiveChatWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FIFA World Cup 2026 Business Opportunities | Monetize FIFA 2026 Toronto Vancouver",
  description:
    "Expert consulting for FIFA vendors Canada. FIFA 2026 small business support and monetization strategies for Toronto and Vancouver. Book your strategy session today.",
  keywords: [
    "FIFA World Cup 2026 business opportunities",
    "Monetize FIFA 2026 Toronto Vancouver",
    "Consulting for FIFA vendors Canada",
    "FIFA 2026 small business support",
    "FIFA 2026 business consulting",
    "World Cup 2026 monetization",
    "Vancouver business opportunities FIFA",
    "Toronto FIFA business strategy",
    "FIFA 2026 vendor support",
    "Small business FIFA World Cup",
  ],
  metadataBase: new URL('https://www.fwc26.ca'),
  openGraph: {
    title: "FIFA World Cup 2026 Business Opportunities | Monetize FIFA 2026 Toronto Vancouver",
    description:
      "Expert consulting for FIFA vendors Canada. FIFA 2026 small business support and monetization strategies for Toronto and Vancouver. Book your strategy session today.",
    url: "https://www.fwc26.ca/",
    siteName: "FIFA 2026 Biz Advantage",
    type: "website",
    images: [
      {
        url: "/Commercial-Opportunity.jpg",
        width: 1200,
        height: 630,
        alt: "FIFA 2026 Business Opportunities in Vancouver and Toronto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FIFA World Cup 2026 Business Opportunities | Monetize FIFA 2026 Toronto Vancouver",
    description: "Expert consulting for FIFA vendors Canada. FIFA 2026 small business support and monetization strategies.",
    images: ["/Commercial-Opportunity.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <LiveChatWidget />
        <footer className="mt-16 bg-white text-blue-900 px-4 py-12 border-t border-blue-100 shadow-inner">
  <div id="contact" className="max-w-3xl mx-auto flex flex-col gap-12 items-center text-center">
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <ContactForm />
    </div>
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <NewsletterSignup />

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

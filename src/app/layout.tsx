import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import ContactForm from "@/components/ContactForm";
import NewsletterSignup from "@/components/NewsletterSignup";
import HybridChatWidget from "@/components/HybridChatWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FWC26 Marketing Group | FIFA World Cup 2026 Business Opportunities | Toronto Vancouver Vendor Support",
  description:
    "FWC26 web design and marketing in Canada. FIFA World Cup 2026 Toronto small business support, Vancouver vendor license, business consulting, and vendor program support. Get your FIFA 2026 vendor license today.",
  keywords: [
    "FWC26 web design and marketing in Canada",
    "FIFA WORLD CUP 2026 Toronto small business support",
    "FIFA WORLD CUP 2026 Vancouver vendor license",
    "Toronto fifa world cup 2026",
    "World Cup 2026",
    "vancouver fifa world cup 2026",
    "cup 2026",
    "FWC26 Vancouver business opportunities",
    "FIFA WORLD CUP 2026 Canada small business initiative program",
    "How to get a FIFA 2026 vendor license in Toronto",
    "Steps to launch a food truck for FIFA 2026 Canada",
    "How to monetize the FIFA World Cup 2026 in Canada",
    "FWC26 business development services",
    "FIFA WORLD CUP 2026 permits and vendor applications",
    "Toronto & Vancouver",
    "FWC26 Marketing Group",
    "FWC26 vendor program support",
    "FWC26 small business initiative",
    "FWC26 Toronto business vendors",
    "WEARE26 Toronto",
    "WEARE26 Vancouver",
    "FWC26 consulting services Canada",
    "FIFA WORLD CUP 2026 small business funding Canada",
    "FIFA 2026 vendor program Vancouver",
    "Small business FIFA World Cup 2026 Canada",
    "How to start a business FIFA World Cup 2026",
    "FWC26 vendor license Canada",
    "FWC26 food truck business in Toronto",
    "FWC26 Canada marketing consulting",
    "FWC26 permits and licenses Canada",
    "FIFA WORLD CUP 2026 vendor support program",
    "FIFA World Cup 2026 business opportunities",
    "FWC26 Canada business consulting",
    "FIFA WORLD CUP 2026 vendor program",
    "FWC26 Canada entrepreneur program",
    "FIFA 2026 Canada hospitality business",
    "FWC26 Toronto business opportunities",
    "FWC26 Vancouver business vendors",
    "FWC26 marketing services in Toronto",
    "FWC26 web design and marketing in Canada",
    "FIFA WORLD CUP 2026 Toronto small business support",
    "FIFA WORLD CUP 2026 Vancouver vendor license optimization",
  ],
  metadataBase: new URL('https://www.fwc26.ca'),
  openGraph: {
    title: "FWC26 Marketing Group | FIFA World Cup 2026 Business Opportunities | Toronto Vancouver Vendor Support",
    description:
      "FWC26 web design and marketing in Canada. FIFA World Cup 2026 Toronto small business support, Vancouver vendor license, business consulting, and vendor program support. Get your FIFA 2026 vendor license today.",
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
      <head>
        {/* Crisp Chat Widget - Loaded by HybridChatWidget component */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp=[];
              window.CRISP_WEBSITE_ID="${process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID || '26631aca-283a-47db-876b-5d803e778082'}";
              (function(){
                d=document;
                s=d.createElement("script");
                s.src="https://client.crisp.chat/l.js";
                s.async=1;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased bg-white text-blue-900`}
      >
        <NavBar />
        {children}
        <HybridChatWidget />
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

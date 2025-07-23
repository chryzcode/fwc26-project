import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

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
      </body>
    </html>
  );
}

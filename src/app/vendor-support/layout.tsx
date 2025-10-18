import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "FWC26 Vendor Support Program | FIFA 2026 Vendor Services Canada",
  description: "FWC26 Vendor Support Program (VSP) and Small Business Initiative Program (SBIP) for FIFA World Cup 2026. Get vendor permits, licensing, and business support in Toronto and Vancouver.",
  keywords: [
    "FWC26 vendor support program",
    "FIFA World Cup 2026 vendor license",
    "FWC26 small business initiative program",
    "FIFA 2026 vendor permits Canada",
    "Toronto FIFA 2026 vendor program",
    "Vancouver FIFA 2026 vendor support",
    "FWC26 vendor application support",
    "FIFA 2026 business opportunities",
    "FWC26 vendor compliance",
    "FIFA World Cup 2026 small business",
    "FWC26 vendor education sessions",
    "FIFA 2026 vendor licensing support",
    "FWC26 vendor registration",
    "FIFA World Cup 2026 vendor opportunities",
    "FWC26 vendor support services"
  ],
  openGraph: {
    title: "FWC26 Vendor Support Program | FIFA 2026 Vendor Services Canada",
    description: "FWC26 Vendor Support Program (VSP) and Small Business Initiative Program (SBIP) for FIFA World Cup 2026. Get vendor permits, licensing, and business support in Toronto and Vancouver.",
    url: "https://www.fwc26.ca/vendor-support",
    siteName: "FWC26 Marketing Group",
    type: "website",
  },
};

export default function VendorSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

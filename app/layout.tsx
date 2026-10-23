import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zero Index",
  alternateName: ["Zero Index Consulting", "Zero Index Technologies"],
  url: "https://zeroindex.co.za",
  logo: "https://zeroindex.co.za/zero-index-mark.png",
  email: "hello@zeroindex.co.za",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Johannesburg",
    addressCountry: "ZA",
  },
  sameAs: ["https://www.linkedin.com/company/zero-index-technologies/"],
};

export const metadata: Metadata = {
  title: "Zero Index Consulting",
  description: "AI-assisted enquiry, workflow, data and cloud systems for growing service businesses.",
  verification: {
    google: "q4xwTScJbMk5-9CVcq0Dc79vStU0Mc3SV3g1bgtqSRc",
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

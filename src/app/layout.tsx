import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agus Arone — Strategic Product Designer",
  description: "Designing clarity in complex products. I help teams turn ambiguity into direction — aligning strategy, design, and data to deliver measurable outcomes.",
  openGraph: {
    title: "Agus Arone — Strategic Product Designer",
    description: "Designing clarity in complex products. I help teams turn ambiguity into direction — aligning strategy, design, and data to deliver measurable outcomes.",
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
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9K9LH9C5FX"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9K9LH9C5FX');
          `}
        </Script>
        <script 
          type="text/javascript" 
          src="https://assets.calendly.com/assets/external/widget.js" 
          async
        />
      </body>
    </html>
  );
}

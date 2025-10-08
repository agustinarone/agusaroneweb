import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <script 
          type="text/javascript" 
          src="https://assets.calendly.com/assets/external/widget.js" 
          async
        />
      </body>
    </html>
  );
}

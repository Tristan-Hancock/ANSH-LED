import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Global metadata applied to all pages
export const metadata: Metadata = {
  // Default title and template for page-specific titles
  title: {
    default: "Ansh LED – Premium LED Lighting Solutions",
    template: "%s | Ansh LED",
  },
  // Site-wide description for SEO
  description:
    "Ansh LED provides energy-efficient, long-lasting LED lighting solutions for homes, offices, and commercial spaces across India.",
  // Ensure responsive scaling on mobile
  viewport: "width=device-width, initial-scale=1",
  // Favicon
  icons: {
    icon: "/favicon.png",
  },
  // Canonical host for SEO to avoid duplicate content
  alternates: {
    canonical: "https://www.anshled.com",
  },
  // Basic Open Graph for social sharing
  openGraph: {
    url: "https://www.anshled.com",
    title: "Ansh LED – Premium LED Lighting Solutions",
    description:
      "Energy-efficient, long-lasting LED lighting for every application.",
    siteName: "Ansh LED",
    images: [
      {
        url: "https://www.anshled.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Ansh LED logo",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

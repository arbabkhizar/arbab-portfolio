import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Arbab Khizar · Sr. WordPress Developer",
  description:
    "Arbab Khizar is a senior WordPress developer in Lahore, Pakistan with 5+ years of experience and 520+ projects delivered: custom WordPress, Elementor, WooCommerce, plugins, speed and SEO.",
  keywords: [
    "WordPress developer",
    "Elementor",
    "WooCommerce",
    "Divi",
    "custom plugins",
    "Lahore",
    "Arbab Khizar",
  ],
  authors: [{ name: "Arbab Khizar" }],
  openGraph: {
    title: "Arbab Khizar · Sr. WordPress Developer",
    description:
      "Fast, modern and responsive WordPress websites. 5+ years, 520+ projects delivered.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable} antialiased`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}

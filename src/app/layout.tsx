import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aman Verma - Product Manager & Tech Entrepreneur",
  description: "Product Manager with entrepreneurial experience and a technical foundation. Building products at the intersection of business, technology, and human behavior.",
  keywords: ["Product Manager", "Entrepreneur", "Frontend Developer", "Startup", "Tech"],
  authors: [{ name: "Aman Verma" }],
  openGraph: {
    title: "Aman Verma - Product Manager & Tech Entrepreneur",
    description: "Product Manager with entrepreneurial experience and a technical foundation",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Verma - Product Manager & Tech Entrepreneur",
    description: "Product Manager with entrepreneurial experience and a technical foundation",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

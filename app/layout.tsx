import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { WhatsAppFloatingButton } from "@/components/sections/WhatsAppFloatingButton";
import { ExitIntentPopup } from "@/components/sections/ExitIntentPopup";
import { SEO } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevArea - Premium Digital Growth Agency | Custom Web Development",
  description: "Build high-performing websites, landing pages, ecommerce stores, and AI-powered experiences with DevArea. Expert web development and design agency.",
  keywords: SEO.keywords.join(', '),
  metadataBase: new URL(SEO.baseUrl),
  openGraph: {
    title: "DevArea - Premium Digital Growth Agency",
    description: "Custom website development, UI/UX design, landing pages, ecommerce solutions, and AI chatbot integration.",
    url: SEO.baseUrl,
    siteName: "DevArea",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevArea",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevArea - Premium Digital Growth Agency",
    description: "Custom website development and digital solutions that drive growth.",
    creator: "@devarea",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <meta name="theme-color" content="#F8FAFC" />
      </head>
      <body className="min-h-screen flex flex-col bg-light-bg dark:bg-black text-light-heading dark:text-white">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
          <WhatsAppFloatingButton type="default" position="bottom-right" />
          <ExitIntentPopup 
            whatsappNumber="919876543210"
            whatsappMessage="Hi, mujhe website development ke baare mein details chahiye"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}

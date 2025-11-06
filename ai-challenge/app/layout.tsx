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

export const metadata: Metadata = {
  title: "28-Day AI Power-Up Challenge | Roop Solar",
  description:
    "Replace 15 minutes of doomscrolling with practical AI skills tailored for founders 40+. Join the 28-Day AI Power-Up Challenge and transform how you plan, market, and brainstorm.",
  openGraph: {
    title: "28-Day AI Power-Up Challenge",
    description:
      "Daily microlearning to master ChatGPT, Perplexity, Notion AI, Midjourney, and Canva for your business.",
    url: "https://agentic-4efc9e35.vercel.app",
    siteName: "28-Day AI Power-Up Challenge",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "28-Day AI Power-Up Challenge",
    description:
      "A guided microlearning journey designed for founders over 40 to unlock AI superpowers in less than 20 minutes a day.",
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
        {children}
      </body>
    </html>
  );
}

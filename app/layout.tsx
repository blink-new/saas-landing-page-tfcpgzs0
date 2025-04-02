import Script from 'next/script';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaaSify - Transform Your Business",
  description: "Streamline your workflow, boost productivity, and drive growth with our powerful SaaS platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* CRITICAL: DO NOT REMOVE/MODIFY THIS COMMENT OR THE SCRIPT BELOW */}
        <Script src="https://blink.new/auto-engineer.js" type="module" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
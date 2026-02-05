import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Clinical Psychologist in Santa Monica, CA",
  description: "Compassionate psychological support specialized in trauma-informed care, EMDR, and CBT for anxiety and life transitions in Santa Monica, California.",
  keywords: ["Psychologist Santa Monica", "Trauma Therapy", "EMDR", "CBT", "Anxiety Treatment", "Dr. Maya Reynolds"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased selection:bg-primary/20`}
      >
        {children}
      </body>
    </html>
  );
}


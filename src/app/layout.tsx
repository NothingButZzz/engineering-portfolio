import type { Metadata } from "next";
import { Inter, Noto_Sans_TC, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yu Jen Lin — Robotics Engineer",
  description:
    "Building intelligent machines for the future. Robotics, embedded systems, AI and automation portfolio of Yu Jen Lin.",
  keywords: [
    "Robotics Engineer",
    "Embedded Systems",
    "Automation",
    "AI",
    "Yu Jen Lin",
  ],
  openGraph: {
    title: "Yu Jen Lin — Robotics Engineer",
    description: "Building intelligent machines for the future.",
    type: "website",
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
      className={`${inter.variable} ${notoSansTC.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-fg">{children}</body>
    </html>
  );
}

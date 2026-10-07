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
  metadataBase: new URL("https://nothingbutzzz.github.io"),
  title: "Yu-Jen (Kenny) Lin — Intelligent Automation Portfolio",
  description:
    "Engineering portfolio of Yu-Jen (Kenny) Lin, an Intelligent Automation Engineering student at Taipei Tech — competition robots, rocket payload hardware and computer vision.",
  alternates: {
    canonical: "/engineering-portfolio/",
    languages: { "zh-TW": "/" },
  },
  keywords: [
    "Intelligent Automation",
    "Robotics",
    "Embedded Systems",
    "Automation",
    "AI",
    "Yu-Jen Lin",
    "Kenny Lin",
    "林榆蓁",
  ],
  openGraph: {
    title: "Yu-Jen (Kenny) Lin — Intelligent Automation Portfolio",
    description:
      "Competition robots, rocket payload hardware and computer vision — Taipei Tech.",
    url: "/engineering-portfolio/",
    type: "website",
    images: [{ url: "/engineering-portfolio/og.jpg", width: 1200, height: 630 }],
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

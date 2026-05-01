import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";

import "@/app/globals.css";
import { ScrollProgress } from "@/components/scroll-progress";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wine Network",
  description: "Discover refined wines, curated collections, and seasonal pairings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${dmSans.variable} ${spaceGrotesk.variable}`}>
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}

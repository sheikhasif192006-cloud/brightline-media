import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/src/components/CustomCursor";
import { ScrollProgress } from "@/src/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brightline Media | Video Editing Agency for Creators",
  description: "Premium video editing and content growth agency. We help creators turn content into consistent growth across YouTube, Instagram, TikTok and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="bg-black text-foreground min-h-screen selection:bg-cyber-orange/30 selection:text-cyber-orange noise-overlay cursor-none md:cursor-none">
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

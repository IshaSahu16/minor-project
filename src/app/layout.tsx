import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/level_one_layout/navbar";
import Footer from "@/components/level_one_layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Newsify - Fake News Detection",
  description: "Detect fake news using machine learning model for a truthful information future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
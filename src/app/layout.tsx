import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";
import { Toaster } from "@/components/ui/sonner"


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Toaster position="top-right" />
        <Footer />
      </body>
    </html>
  );
}

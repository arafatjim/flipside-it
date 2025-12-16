import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "./footer";





export const metadata: Metadata = {
  title: "Flipside IT",
  description: "Flip, Solve, Transform IT Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-orbitron font-medium antialiased px-2"
        
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

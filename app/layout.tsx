import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "./footer";

import { ClerkProvider } from '@clerk/nextjs';




export const metadata: Metadata = {
  title: "PixelBuy ",
  description: "Your Ultimate Online Tech Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className="font-orbitron font-medium antialiased mx-auto"
        
      >
        <div className="">
          <Header />
        <div className="flex flex-col w-11/12 mx-auto min-h-screen">
          <main className="flex-1 "> {children} </main>
        </div>
        <Footer />
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}

import React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "@/styles/globals.css";

export const metadata = {
  title: "Solana Armenia",
  description: "Welcome to Solana Armenia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/*<Header />*/}
        {children}
        <Footer />
      </body>
    </html>
  );
}

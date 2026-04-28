import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ApolloProviderWrapper } from "@/lib/apollo-provider";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Contradiction | Ultra-Luxury Furniture",
  description: "Each piece is made once. Not for sale. For consideration. Commission by invitation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FFFFFF] text-[#0D0D0D]">
        <ApolloProviderWrapper>
        <Navbar />
        <main className="flex-grow pt-[53px] w-full">
          {children}
        </main>
        <Footer />
        </ApolloProviderWrapper>
      </body>
    </html>
  );
}

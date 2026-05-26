import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins, Lavishly_Yours } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ApolloProviderWrapper } from "@/lib/apollo-provider";
import Chatbot from "@/components/layout/Chatbot";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const lavishly_yours = Lavishly_Yours({
  variable: "--font-lavishly_yours",
  subsets: ["latin"],
  weight: "400",
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
      className={`${cormorant.variable} ${poppins.variable} ${lavishly_yours.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FFFFFF] text-[#0D0D0D]">
        <ApolloProviderWrapper>
        <Navbar />
        <main className="flex-grow pt-[40px] w-full">
          {children}
        </main>
        <Chatbot/>
        <Footer />
        </ApolloProviderWrapper>
      </body>
    </html>
  );
}

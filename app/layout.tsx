import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins, Lavishly_Yours } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
  metadataBase: new URL("https://contradictions.pk"),
  title: {
    default: "Contradiction | Ultra-Luxury Furniture",
    template: "%s | Contradiction",
  },
  description: "Contradiction | Premium, handcrafted luxury furniture brand. Explore our exclusive collection of bespoke beds, sofas, dining tables, and lighting.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://contradictions.pk",
    siteName: "Contradiction",
    title: "Contradiction | Ultra-Luxury Furniture",
    description: "Contradiction | Premium, handcrafted luxury furniture brand. Explore our exclusive collection of bespoke beds, sofas, dining tables, and lighting.",
    images: [
      {
        url: "/logo-contradictionsv2.png",
        width: 1200,
        height: 630,
        alt: "Contradiction Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contradiction | Ultra-Luxury Furniture",
    description: "Contradiction | Premium, handcrafted luxury furniture brand. Explore our exclusive collection of bespoke beds, sofas, dining tables, and lighting.",
    images: ["/logo-contradictionsv2.png"],
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
      className={`${cormorant.variable} ${poppins.variable} ${lavishly_yours.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FFFFFF] text-[#0D0D0D]">
        <Navbar />
        <main className="flex-grow pt-[40px] w-full">
          {children}
        </main>
        <Chatbot/>
        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { SCHOOL_INFO } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${SCHOOL_INFO.name} | ${SCHOOL_INFO.tagline}`,
  description: `${SCHOOL_INFO.name} - Quality education from Pre-KG to Class IV in Palatana, Tripura. Nurturing young minds with Gurukul-inspired values and modern child-centered learning.`,
  keywords:
    "school, education, Palatana, Tripura, Pre-KG, LKG, UKG, primary school, English medium, Gurukul",
  authors: [{ name: SCHOOL_INFO.name }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: `${SCHOOL_INFO.name}`,
    description: SCHOOL_INFO.tagline,
    type: "website",
    locale: "en_IN",
    siteName: SCHOOL_INFO.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SCHOOL_INFO.name}`,
    description: SCHOOL_INFO.tagline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

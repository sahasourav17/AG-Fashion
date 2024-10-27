import type { Metadata } from "next";
import { Anek_Bangla, Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const anek = Anek_Bangla({
  subsets: ["bengali"],
  variable: "--font-anek-bangla",
});

export const metadata: Metadata = {
  title: "Home | Ananda Garments",
  description: "Wear your style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.className} ${inter.variable}`}>
        <main className={anek.variable}>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";
import ReffererProvider from "./ReffererProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "500",
});
const satoshi = localFont({
  src: "../public/fonts/satoshi/Satoshi-Variable.woff",
  variable: "--font-satoshi",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "500",
});

const inter = Inter({
  display: "swap",
  variable: "--inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "TON | The Open Network | Decentralized Blockchain Built for Everyone",
  description:
    "Discover TON — The Open Network built by the community using Telegram's technology. Fast, scalable, and user-friendly, TON is powering Web3 for 500M people worldwide.",
  icons: "/brand/diamond.ico",
  keywords: "TON, The Open Network, blockchain, cryptocurrency, Web3, Telegram, decentralized",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${satoshi.variable} ${inter.variable} antialiased`}
      >
        <ReffererProvider>

        <ToastContainer
          autoClose={2000}
          hideProgressBar={true}
          theme="colored"
          />
        {children}
          </ReffererProvider>
      </body>
    </html>
  );
}

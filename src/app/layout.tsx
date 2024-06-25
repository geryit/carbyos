import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./1.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CarbonOS",
  description: "CarbonOS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
    </html>
  );
}

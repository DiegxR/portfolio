import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ViewStateProvider } from "@/lib/context/ViewContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ViewStateProvider>
      <body className={inter.className}>{children}</body>
      </ViewStateProvider>
    </html>
  );
}
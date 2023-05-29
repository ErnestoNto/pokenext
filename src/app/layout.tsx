"use client";
import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import ListProvider from "@/context/listContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ListProvider>
          <Header />
          {children}
        </ListProvider>
      </body>
    </html>
  );
}

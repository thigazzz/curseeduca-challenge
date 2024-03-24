import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Curseduca E-commerce Chanllenge",
  description: "A fullstack chanllenge by Curseduca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main className="w-full h-screen p-2 flex justify-between items-center bg-slate-300">
          {children}
        </main>
      </body>
    </html>
  );
}

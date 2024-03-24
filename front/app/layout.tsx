import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SearchBar from "./components/SearchBar";
import ShopCart from "./components/ShopCart";

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
        <header className="w-full bg-slate-200 flex justify-around md:justify-between items-center sm:p-4">
          <div className="text-xs md:text-lg">Capucceeno</div>
          <div className="flex items-center">
            <div className="mr-4 md:mr-8">
              <SearchBar/>
            </div>
            <div>
              <ShopCart/>
            </div>
          </div>
        </header>
        <main className="w-full h-screen p-2 flex justify-between items-center bg-slate-300">
          {children}
        </main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Football info",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className}>
      <body>
        <header className="header">
          <div className="container">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-[30px] h-[30px]">
                <Image
                  src="/football-info.png"
                  alt="icon"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-2xl font-bold none md:block">Football</span>
            </Link>
            <div className="">
              <Link href="/auth">
                <div className=" w-[100px] h-[30px] text-black rounded text-center bg-white">
                  შესვლა
                </div>
              </Link>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

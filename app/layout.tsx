import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hábitos - NextJS",
  description: "Primeiro site usando Nextjs 13.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-neutral-900"}>
        <h1 className="text-5xl text-center font-extrabold pt-4">Hábitos</h1>
        {children}
      </body>
    </html>
  );
}

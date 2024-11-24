import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "TerminusEE",
  description: "Call of Duty Black Ops 6 Terminus Easter Egg Puzzle calculator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col dark h-screen antialiased`}
      >
        <main className="flex-1">{children}</main>
        <footer className="border-t p-2">In COD we trust, made by @elijah629.</footer>
      </body>
    </html>
  );
}

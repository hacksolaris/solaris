import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import Bg from "@/components/bg";
import { Be_Vietnam_Pro } from "next/font/google";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${beVietnamPro.className} antialiased overflow-x-hidden`}
      >
        <Bg />
        <Nav />
        {children}
      </body>
    </html>
  );
}

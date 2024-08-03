import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mokletdev",
  description:
    "Open-sourced projects by Moklet Developers for the World 4.0 🌏",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}

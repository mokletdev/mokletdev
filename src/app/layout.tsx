import type { Metadata } from "next";
import { Rubik, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Provider } from "./provider";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moklet Dev",
  description:
    "Open-sourced projects by Moklet Developers for the World 4.0 🌏",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${rubik.variable} ${inter.variable} ${spaceGrotesk.variable} antialiased w-full max-w-screen font-sans bg-background`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

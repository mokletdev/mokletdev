import type { Metadata } from "next";
import { Rubik, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LocomotiveScrollWrapper } from "@/components/wrappers/locomotive-scroll";
import { Provider } from "jotai";

const rubik = Rubik({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
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
    <html lang="en">
      <body
        className={`${rubik.className} ${inter.className} ${spaceGrotesk.className} antialiased bg-neutral-950 text-white`}
      >
        <Provider>
          <LocomotiveScrollWrapper>{children}</LocomotiveScrollWrapper>
        </Provider>
      </body>
    </html>
  );
}

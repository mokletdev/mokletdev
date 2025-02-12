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
        className={`${rubik.className} ${inter.className} ${spaceGrotesk.className} antialiased bg-zinc-950 text-white relative`}
      >
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-repeat opacity-5"
          style={{
            backgroundSize: "100px",
            backgroundImage: "url('/img/noise.png')",
          }}
        ></div>
        <Provider>
          <LocomotiveScrollWrapper>{children}</LocomotiveScrollWrapper>
        </Provider>
      </body>
    </html>
  );
}

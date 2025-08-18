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
  title: "MokletDev",
  description:
    "MokletDev is a student developer community under METIC (Moklet Education of Technology and Informatic Club). We turn ideas into working products, web apps, tools, and services—used by our school and external partners",
  openGraph: {
    title: "MokletDev",
    description:
      "MokletDev is a student developer community under METIC (Moklet Education of Technology and Informatic Club). We turn ideas into working products, web apps, tools, and services—used by our school and external partners",
    url: "https://mokletdev.vercel.app",
    siteName: "MokletDev",
    locale: "en_US",
    type: "website",
  },
  // Turn on PROD
  // robots: {
  //   index: true,
  //   follow: true,
  //   nocache: false,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     noimageindex: true,
  //     // "max-video-preview": -1,
  //     // "max-image-preview": "large",
  //     // "max-snippet": -1,
  //   },
  // },
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

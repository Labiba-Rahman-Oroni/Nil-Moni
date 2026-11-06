import type { Metadata } from "next";
import { Playfair_Display, Inter, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/ui/CursorGlow";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-bengali",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NIL MONI | নীল মণি – Bengali Jewellery",
  description:
    "NIL MONI (নীল মণি) – Bengali traditional and modern fashion jewellery in Bangladesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${hindSiliguri.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CursorGlow />
        <AnnouncementBar />
        <Navbar />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
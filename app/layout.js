import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import PropTypes from "prop-types";
const geistSans = Geist({
 variable: "--font-geist-sans",
 subsets: ["latin"],
});

const geistMono = Geist_Mono({
 variable: "--font-geist-mono",
 subsets: ["latin"],
});

export const metadata = {
 title: "Boykot Rehberi",
 description:
  "Boykot listelerini ve güvenilir alternatifleri keşfedin, bilinçli tüketim tercihleri yapın.",
 metadataBase: new URL("https://example.com"),
 openGraph: {
  title: "Boykot Rehberi",
  description:
   "Boykot listelerini ve güvenilir alternatifleri keşfedin, bilinçli tüketim tercihleri yapın.",
  locale: "tr_TR",
 },
};

export default async function RootLayout({ children }) {
 return (
  <html lang="tr">
   <body
    className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col bg-slate-50`}
   >
    <Header />
    <main className="flex-1 pt-[180px]">{children}</main>
    <Footer />
   </body>
  </html>
 );
}

RootLayout.propTypes = {
 children: PropTypes.node.isRequired,
};

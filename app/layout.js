import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header.jsx";
import { getCategorySummaries } from "@/lib/categories.js";
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
  const navigationCategories = await getCategorySummaries(12);

  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col bg-slate-50`}
      >
        <Header categories={navigationCategories} />
        <main className="flex-1 pt-[200px]">{children}</main>
        <footer className=" border-t border-slate-200 bg-white">
          <div className="container flex flex-col gap-6 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-base font-semibold text-slate-900">
                Boykot Rehberi
              </p>
              <p className="mt-2 max-w-md">
                Tüketici gücünü kullanarak daha adil bir dünyaya katkı sağlayın.
              </p>
            </div>
            <p>© {new Date().getFullYear()} Boykot Rehberi</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

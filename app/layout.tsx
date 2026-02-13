import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Taro Daily",
  description: "Онлайн-сервис таро-предсказаний для саморефлексии",
  openGraph: { title: "Taro Daily", description: "Получите расклад на сегодня за 30 секунд" },
  twitter: { card: "summary_large_image", title: "Taro Daily" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="ru">
      <body>
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');`}</Script>
          </>
        )}
        <Header />
        <main className="container-app py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

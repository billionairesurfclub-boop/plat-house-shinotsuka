import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ぷらっとハウス新大塚 | 新大塚・東池袋 民泊 最大8名 2タイプ客室",
  description:
    "新大塚駅・東池袋駅徒歩10分。80㎡3DK（最大8名）と18㎡スタジオ（最大2名）の2タイプ。Netflix・Nintendo Switch・10ギガインターネット・ドラム式洗濯機完備。駐車場あり（有料）。",
  keywords:
    "ぷらっとハウス新大塚, 新大塚 民泊, 新大塚 宿泊, 東池袋 民泊, 文京区 民泊, 東京 グループ宿泊, 新大塚 一棟貸し, Tokyo Shin-Otsuka accommodation, 新大塚 ファミリー旅行",
  openGraph: {
    title: "ぷらっとハウス新大塚 | 新大塚・東池袋 民泊 最大8名",
    description:
      "新大塚駅徒歩10分。80㎡3DK（最大8名）と18㎡スタジオ（最大2名）。Netflix・Switch・10ギガ完備。駐車場あり。",
    url: "https://shinotsuka.plat-house.jp",
    siteName: "Plat House Shin-Otsuka",
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "https://shinotsuka.plat-house.jp",
    languages: {
      "ja": "https://shinotsuka.plat-house.jp",
      "en": "https://shinotsuka.plat-house.jp/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-JT3R5B6TX7" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JT3R5B6TX7');
        `}</Script>
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          "name": "ぷらっとハウス新大塚",
          "url": "https://shinotsuka.plat-house.jp",
          "telephone": "08070583086",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "大塚6-25-5",
            "addressLocality": "文京区",
            "addressRegion": "東京都",
            "postalCode": "112-0012",
            "addressCountry": "JP"
          },
          "checkinTime": "16:00",
          "checkoutTime": "11:00",
          "priceRange": "¥20,000〜¥50,000",
          "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Netflix", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Nintendo Switch", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "10ギガインターネット", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "ドラム式洗濯機", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "駐車場", "value": true }
          ]
        }) }} />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./global.css";
import { TanstackQueryProvider } from "provider/tanstack-query-provider";
import { Header } from "@components/header/header";
import { Adsense } from "@components/adsense/adsense";
import Script from "next/script";
import { Footer } from "@components/footer/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Portal Info - Berita Terkini, Terpercaya & Terupdate",
    template: "%s | Portal Info",
  },
  description:
    "Portal Info menyajikan berita terkini, terpercaya dan terupdate dari berbagai kategori: politik, ekonomi, teknologi, olahraga, hiburan dan lifestyle. Dapatkan informasi akurat setiap hari.",
  keywords: [
    "berita terkini",
    "berita hari ini",
    "berita terbaru",
    "portal berita",
    "berita indonesia",
    "breaking news",
    "berita politik",
    "berita ekonomi",
    "berita teknologi",
    "berita olahraga",
  ],
  authors: [{ name: "Portal Info" }],
  creator: "Portal Info",
  publisher: "Portal Info",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://portal-info.vercel.app",
    siteName: "Portal Info",
    title: "Portal Info - Berita Terkini, Terpercaya & Terupdate",
    description:
      "Portal Info menyajikan berita terkini, terpercaya dan terupdate dari berbagai kategori. Dapatkan informasi akurat setiap hari.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portal Info - Berita Terkini",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portal Info - Berita Terkini, Terpercaya & Terupdate",
    description:
      "Portal Info menyajikan berita terkini, terpercaya dan terupdate dari berbagai kategori.",
    images: ["/og-image.png"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://portal-info.vercel.app",
  },
  category: "news",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <Adsense /> */}
        <script
          async={true}
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.NEXT_PUBLIC_PID!}`}
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanstackQueryProvider>
          <Header />
          {children}
          <Footer />
        </TanstackQueryProvider>
      </body>
    </html>
  );
}

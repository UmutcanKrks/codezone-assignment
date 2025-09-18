import type { Metadata } from "next";
import { Saira, Saira_Condensed } from "next/font/google";
import "./globals.css";
import { WebsiteStructuredData, OrganizationStructuredData } from "../components/seo/structured-data";
import Header from "../components/layout/header"


const sairaCondensed = Saira_Condensed({
  variable: "--font-saira-condensed",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Rapkology - Türkiye'nin En Büyük Rap Müzik Platformu",
    template: "%s | Rapkology"
  },
  description: "Türkiye'nin en büyük rap müzik platformu. En son haberler, etkinlikler, müzikler ve videolar. Hip-hop kültürünün kalbi Rapkology'de atıyor.",
  keywords: [
    "rap müzik",
    "hip hop",
    "türkçe rap",
    "rap haberleri",
    "müzik platformu",
    "rapkology",
    "türkiye rap",
    "hip hop kültürü",
    "rap etkinlikleri",
    "müzik videoları"
  ],
  authors: [{ name: "Rapkology" }],
  creator: "Rapkology",
  publisher: "Rapkology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rapkology.com'),
  alternates: {
    canonical: '/',
    languages: {
      'tr-TR': '/tr',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://rapkology.com',
    title: "Rapkology - Türkiye'nin En Büyük Rap Müzik Platformu",
    description: "Türkiye'nin en büyük rap müzik platformu. En son haberler, etkinlikler, müzikler ve videolar. Hip-hop kültürünün kalbi Rapkology'de atıyor.",
    siteName: 'Rapkology',
    images: [
      {
        url: '/logos/rapkology-logo.png',
        width: 1200,
        height: 630,
        alt: 'Rapkology Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rapkology - Türkiye'nin En Büyük Rap Müzik Platformu",
    description: "Türkiye'nin en büyük rap müzik platformu. En son haberler, etkinlikler, müzikler ve videolar.",
    images: ['/logos/rapkology-logo.png'],
    creator: '@rapkology',
    site: '@rapkology',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'music',
  generator: 'Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${sairaCondensed.variable} ${saira.variable} antialiased`}
      >
       
        <WebsiteStructuredData />
        <OrganizationStructuredData />
        <Header/>
        {children}
      </body>
    </html>
  );
}

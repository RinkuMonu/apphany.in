import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import DynamicSeo from "../../components/SEO/DynamicSeo";
import SiteLayout from "../../components/layout/SiteLayout";

export const metadata = {
  metadataBase: new URL("https://apphany.in"),
  title: {
    default: "Apphany | Payment Services, Loans & Insurance",
    template: "%s | Apphany",
  },
  description:
    "Explore Payment Services, Credit Card, PAN Card, Loans, and Insurance solutions with Apphany.",
  keywords: [
    "Apphany",
    "payment services",
    "credit card",
    "insurance",
    "PAN card",
    "personal loan",
    "financial services",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Apphany",
    title: "Apphany | Payment Services, Loans & Insurance",
    description:
      "Explore Payment Services, Credit Card, PAN Card, Loans, and Insurance solutions with Apphany.",
    url: "/",
    images: [
      {
        url: "/image/Apphany-initial.png",
        alt: "Apphany",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apphany | Payment Services, Loans & Insurance",
    description:
      "Explore Payment Services, Credit Card, PAN Card, Loans, and Insurance solutions with Apphany.",
    images: ["/image/Apphany-initial.png"],
  },
  icons: {
    icon: "/image/apphany-fav.png",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="p:domain_verify" content="af39ba6ce6e91e27bb91d26563303735" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://apphany.in/"
        },
        "headline": "Apphany | Payment Services, PAN Card, Credit Card, Loans & Insurance",
        "image": "https://apphany.in/_next/image?url=%2Fimage%2Fmen-home.png&w=1200&q=75",
        "author": { "@type": "Organization", "name": "Apphany Technologies Pvt. Ltd." },
        "publisher": {
          "@type": "Organization",
          "name": "Apphany Technologies Pvt. Ltd.",
          "logo": { "@type": "ImageObject", "url": "https://apphany.in/image/apphany-logoo.png" }
        },
        "datePublished": ""
      }
      `,
          }}
        />

        <link rel="icon" type="image/png" href="/image/apphany-fav.png" />

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5TKFRRHQ');`}
        </Script>
        <meta
          property="og:image"
          content="https://apphany.in/image/Apphany-initial.png"
        />
      </head>

      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DynamicSeo />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5TKFRRHQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}

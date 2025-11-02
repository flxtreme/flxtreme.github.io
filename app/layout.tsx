import type { Metadata } from "next";
import { Lato, Poppins } from "next/font/google";
import "./globals.css"
import Layout from "./(shared)/components/layout/Layout";
import { ThemeProvider } from "./(shared)/contexts/ThemeProvider";
import Head from "next/head";

const geistSans = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const geistMono = Lato({
  variable: "--font-lato",
  subsets: ['latin'],
  weight: ['100', '300', '400', '700','900'],
});

export const metadata: Metadata = {
  title: "Felix Dev",
  description: "Ako Felix",
  openGraph: {
    title: "Felix Dev",
    description: "Ako Felix",
    url: "https://flxtremee.com",
    siteName: "Felix Dev",
    images: [
      {
        url: "https://flxtreme.github.io/preview/preview-portfolio.png",
        width: 1200,
        height: 630,
        alt: "Felix Dev Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Felix Dev",
    description: "Ako Felix",
    images: ["https://flxtreme.github.io/preview/preview-portfolio.png"],
    creator: "@flxtremee",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Felix Dev</title>
        <meta name="description" content="Ako Felix" />

        {/* Open Graph */}
        <meta property="og:title" content="Felix Dev" />
        <meta property="og:description" content="Ako Felix" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://flxtremee.com" />
        <meta property="og:image" content="https://flxtreme.github.io/preview/preview-portfolio.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Felix Dev" />
        <meta name="twitter:description" content="Ako Felix" />
        <meta name="twitter:image" content="https://flxtreme.github.io/preview/preview-portfolio.png" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-svh overflow-hidden`}
      >
        <ThemeProvider>
          <Layout>
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}

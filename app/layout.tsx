import type { Metadata } from "next";
import { Lato, Poppins } from "next/font/google";
import "./globals.css"
import Layout from "./(shared)/components/layout/Layout";
import { ThemeProvider } from "./(shared)/contexts/ThemeProvider";

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
  title: "Felix Dev | Full Stack Developer & Software Engineer",
  description: "Experienced Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Available for hire. View my portfolio and projects.",
  keywords: [
    "Felix Developer",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Philippines Developer",
    "Hire Developer",
    "Freelance Developer",
    "Portfolio",
  ],
  authors: [{ name: "Felix", url: "https://flxtreme.github.io" }],
  creator: "Felix",
  publisher: "Felix",
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
    title: "Felix Dev | Full Stack Developer & Software Engineer",
    description: "Experienced Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Available for hire.",
    url: "https://flxtreme.github.io",
    siteName: "Felix Dev Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://flxtreme.github.io/preview/preview-portfolio.png",
        width: 1200,
        height: 630,
        alt: "Felix Dev - Full Stack Developer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Felix Dev | Full Stack Developer",
    description: "Experienced Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Available for hire.",
    images: ["https://flxtreme.github.io/preview/preview-portfolio.png"],
    creator: "@flxtremee",
    site: "@flxtremee",
  },
  alternates: {
    canonical: "https://flxtreme.github.io",
  },
  category: "technology",
  metadataBase: new URL("https://flxtreme.github.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO tags for better indexing */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f97316" />
        <link rel="canonical" href="https://flxtreme.github.io" />
        
        {/* Structured Data for Google Jobs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Felix",
              url: "https://flxtreme.github.io",
              jobTitle: "Full Stack Developer",
              description: "Experienced Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies",
              sameAs: [
                "https://twitter.com/flxtremee",
                "https://github.com/flxtreme",
                // Add your LinkedIn, GitHub, etc.
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Full Stack Development",
                "Web Development",
              ],
            }),
          }}
        />
      </head>
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
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
  title: "Felix Dev",
  description: "Ako felix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sunalyze - Solar Panel Savings Calculator',
  description: 'Calculate your solar panel savings and ROI with Sunalyze',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  verification: {
    google: 'Ldxqhy0HYHK-WeoGU3KM58Zd5tg2pIPLnyk6Yp9ZoXM',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script 
          src="https://cdn.cookiehub.eu/c2/300c8804.js"
          strategy="afterInteractive"
        />
        <Script
          id="cookiehub-init"
          strategy="afterInteractive"
        >
          {`
            document.addEventListener("DOMContentLoaded", function(event) {
              var cpm = {};
              window.cookiehub.load(cpm);
              
              // Debug function to reset cookies (remove in production)
              window.resetCookieHub = function() {
                document.cookie = "cookiehub=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.sunalyze.net";
                document.cookie = "cookiehub=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                location.reload();
              };
            });
          `}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

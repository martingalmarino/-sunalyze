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
        {/* CookieHub Scripts */}
        <Script 
          src="https://cdn.cookiehub.eu/c2/f775727b.js"
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

'use client'

import Script from 'next/script'
import { useEffect } from 'react'

declare global {
  interface Window {
    cookiehub: {
      load: (config: any) => void
    }
  }
}

interface CookieHubProps {
  siteId: string
}

export default function CookieHub({ siteId }: CookieHubProps) {
  useEffect(() => {
    // Ensure CookieHub is loaded after the script
    const initCookieHub = () => {
      if (typeof window !== 'undefined' && window.cookiehub) {
        const cpm = {}
        window.cookiehub.load(cpm)
      }
    }

    // Try to initialize immediately if already loaded
    initCookieHub()

    // Also try after a short delay to ensure script is loaded
    const timer = setTimeout(initCookieHub, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* CookieHub Script */}
      <Script
        src={`https://cdn.cookiehub.eu/c2/${siteId}.js`}
        strategy="afterInteractive"
        onLoad={() => {
          console.log('CookieHub script loaded')
        }}
        onError={(e) => {
          console.error('CookieHub script failed to load:', e)
        }}
      />
      
      {/* Fallback initialization script */}
      <Script
        id="cookiehub-fallback"
        strategy="afterInteractive"
      >
        {`
          (function() {
            function initCookieHub() {
              if (typeof window.cookiehub !== 'undefined') {
                var cpm = {};
                window.cookiehub.load(cpm);
                console.log('CookieHub initialized successfully');
              } else {
                console.warn('CookieHub not available, retrying...');
                setTimeout(initCookieHub, 500);
              }
            }
            
            // Initialize when DOM is ready
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initCookieHub);
            } else {
              initCookieHub();
            }
          })();
        `}
      </Script>
    </>
  )
}

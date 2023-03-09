import type { AppProps } from 'next/app'
import Script from 'next/script'
import useMousePosition from '../hooks/useMousePosition'

import '../styles/globals.scss'
import '../styles/cursor.scss'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID

export default function App({ Component, pageProps }: AppProps) {
  useMousePosition()

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ window.dataLayer.push(arguments); }
          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

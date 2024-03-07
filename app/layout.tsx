import { Metadata } from 'next'
import Script from 'next/script'
import { Poppins } from 'next/font/google'
import '../styles/globals.scss'
import '../styles/cursor.scss'
import Nav from './components/Nav'

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  title: 'Afeez Awoyemi - Frontend Engineer',
  description:
    'I am a frontend engineer who is passionate about building highly convenient, intuitive and user-friendly applications. I have more than four years of professional experience creating software solutions in frameworks such as  VueJS, Nuxt, Tailwind CSS, Typescript, GraphQL, Flutter, React, React-Native, and Node/Express.',
  icons: '/favicon.svg',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
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
      <body>
        <Nav className="sticky top-0 z-10" />
        <main>{children}</main>
      </body>
    </html>
  )
}

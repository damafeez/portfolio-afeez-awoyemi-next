import type { AppProps } from 'next/app'
import '../styles/globals.scss'

import '../styles/cursor.scss'
import useMousePosition from '../hooks/useMousePosition'

export default function App({ Component, pageProps }: AppProps) {
  useMousePosition()
  return <Component {...pageProps} />
}

import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { wrapper } from "@/store/store";

import 'react-responsive-carousel/lib/styles/carousel.min.css'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App);
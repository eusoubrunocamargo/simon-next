import '@/styles/globals.css'
import { SequenceProvider } from '@/contexts/SequenceContext'

export default function App({ Component, pageProps }) {
  return (
  <SequenceProvider>
    <Component {...pageProps} />
  </SequenceProvider>
  )
}

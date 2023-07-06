import '../global.css'
import { Poppins } from 'next/font/google'

const font = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "900", "800"]})

export default function MyApp({ Component, pageProps }) {
  return (<>
    <Component {...pageProps} />
  </>
  )
}

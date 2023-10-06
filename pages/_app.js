import '../styles/globals.css'

import { Lora } from 'next/font/google'
import { Karla } from 'next/font/google'
import { DefaultSeo } from 'next-seo'

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-lora',
})

const karla = Karla({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-karla',
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_EN',
          url: '',
          site_name: 'Good Taste',
          description: 'But first, Food!',
        }}
      />
      <div className={`${lora.variable} ${karla.variable}`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp

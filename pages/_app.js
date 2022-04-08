import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return ( <Component {...pageProps} />
            <div>
            <Head>
              <meta name="google-site-verification" content="wcC28rNmbYV1lR_OamoSTSVfx87bc4xPFDq_yZt62TA" />
            </Head>
            </div>
         )
}

export default MyApp

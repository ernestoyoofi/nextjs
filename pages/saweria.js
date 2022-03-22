import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

// Here you would fetch and return the user
const useUser = () => ({ user: null, loading: false })

export default function Page() {
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!(user || loading)) {
      router.push('https://saweria.co/ernestoyoofi')
    }
  }, [user, loading])

  return (
  <div>
      <Head>
          <title>Dukung ernestoyoofi | Saweria</title>
          <link rel="icon" href="/saweria.png"/>
          <meta name="description" content="Dukung Aku Dengan Donasi Yuk" />
          <meta name="twitter:title" content="Dukung ernestoyoofi | Saweria" />
          <meta name="twitter:description" content="Dukung Aku Dengan Donasi Yuk" />
          <meta name="twitter:image" content="https://saweria.co/twitter_card.png" />
          <meta name="twitter:url" content="https://saweria.co/ernestoyoofi" />
          <meta property="og:title" content="Dukung ernestoyoofi | Saweria" />
          <meta property="og:description" content="Dukung Aku Dengan Donasi Yuk" />
          <meta property="og:image" content="https://saweria.co/twitter_card.png" />
          <meta property="og:url" content="https://saweria.co/ernestoyoofi" />
      </Head>
      <body>
          Reading....
      </body>
  </div>
  )
}

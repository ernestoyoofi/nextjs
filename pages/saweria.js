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
          <meta name="description" content="Never Gonna Give Your Up" />
          <meta property="og:description" content="Never Gonna Give Your Up" />
          <meta property="og:url" content="https://saweria.co/ernestoyoofi" />
      </Head>
      <body>
          Reading....
      </body>
  </div>
  )
}

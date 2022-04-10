import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const useUser = () => ({ user: null, loading: false })

export default function Page() {
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!(user || loading)) {
      router.push('https://discord.gg/hPRkajUW6e')
    }
  }, [user, loading])

  return (
  <div>
      <Head>
          <title>Join the Ernesto Studio Discord Server!</title>
          <link rel="icon" href="https://discord.gg/assets/ec2c34cadd4b5f4594415127380a85e6.ico"/>
          <meta name="description" content="Check out the Ernesto Studio community on Discord - hang out with 1 other members and enjoy free voice and text chat." />
          <meta name="twitter:title" content="Join the Ernesto Studio Discord Server!" />
          <meta name="twitter:description" content="Check out the Ernesto Studio community on Discord - hang out with 1 other members and enjoy free voice and text chat." />
          <meta name="twitter:image" content="http://cdn.discordapp.com/icons/960835414967611422/49ff43b94c68d0932fc6be7ae28a993a.jpg?size=256" />
          <meta name="twitter:url" content="https://community.ernestoyoofi.id/" />
          <meta property="og:title" content="Join the Ernesto Studio Discord Server!" />
          <meta property="og:description" content="Check out the Ernesto Studio community on Discord - hang out with 1 other members and enjoy free voice and text chat." />
          <meta property="og:image" content="http://cdn.discordapp.com/icons/960835414967611422/49ff43b94c68d0932fc6be7ae28a993a.jpg?size=256" />
          <meta property="og:url" content="https://community.ernestoyoofi.id/" />
      </Head>
      <body>
          Reading...
      </body>
  </div>
  )
}

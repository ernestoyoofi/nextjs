import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const useUser = () => ({ user: null, loading: false })

export default function Page() {
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!(user || loading)) {
      router.push('https://discord.gg/fBFdJ8eyXK')
    }
  }, [user, loading])

  return (
  <div>
      <Head>
          <title>Ernesto Studio Community, Inc.</title>
          <link rel="icon" href="https://discord.gg/assets/ec2c34cadd4b5f4594415127380a85e6.ico"/>
          <meta name="description" content="Check out the Ernesto Studio Community, Inc. community on Discord - hang out with 43 other members and enjoy free voice and text chat." />
          <meta name="twitter:title" content="Ernesto Studio Community, Inc." />
          <meta name="twitter:description" content="Check out the Ernesto Studio Community, Inc. community on Discord - hang out with 43 other members and enjoy free voice and text chat." />
          <meta name="twitter:image" content="https://cdn.discordapp.com/icons/791161756038856744/9ac08bda979d60931e1fffc614eac77a.jpg?size=256" />
          <meta name="twitter:url" content="https://discord-gg.ernestoyoofi.deploy.id/" />
          <meta property="og:title" content="Ernesto Studio Community, Inc." />
          <meta property="og:description" content="Check out the Ernesto Studio Community, Inc. community on Discord - hang out with 43 other members and enjoy free voice and text chat." />
          <meta property="og:image" content="https://cdn.discordapp.com/icons/791161756038856744/9ac08bda979d60931e1fffc614eac77a.jpg?size=256" />
          <meta property="og:url" content="https://discord-gg.ernestoyoofi.deploy.id/" />
      </Head>
      <body>
          Reading...
      </body>
  </div>
  )
}

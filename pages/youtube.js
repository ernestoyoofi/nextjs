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
      router.push('https://www.youtube.com/channel/UCoiy7J9wuubiqdvvJvImmMg')
    }
  }, [user, loading])

  return (
  <div>
      <Head>
          <title>Ernesto Yoofi - YouTube</title>
          <link rel="icon" href="/saweria.png"/>
          <meta name="description" content="Waduh, Saya Males Ngasih Deskripsi ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Social Media ?, Linknya Dibawah Bro Instagram : https://www.instagram.com/yoofi.ernesto/ Server Discord :  Facebook : TikTok : https://www.tiktok.com/@ernesto.yoofi_1403 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ✉️ Kontak / Izin : - Email Contact : info.ernestoyoofi@gmail.com - Contact Form : https://ernestoyoofi.github.io/contact ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬" />
          <meta name="twitter:title" content="Ernesto Yoofi - YouTube" />
          <meta name="twitter:description" content="Waduh, Saya Males Ngasih Deskripsi ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Social Media ?, Linknya Dibawah Bro Instagram : https://www.instagram.com/yoofi.ernesto/ Server Discord :  Facebook : TikTok : https://www.tiktok.com/@ernesto.yoofi_1403 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ✉️ Kontak / Izin : - Email Contact : info.ernestoyoofi@gmail.com - Contact Form : https://ernestoyoofi.github.io/contact ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬" />
          <meta name="twitter:image" content="http://yt3.ggpht.com/HoGoJ-ZO-XVUNCtG3o2qW4YT2UPlO92gT-sPcqLrwgQexnWqsbRyB73EV3cDeLKBGrqpCo1k9Q=s900-c-k-c0x00ffffff-no-rj" />
          <meta name="twitter:url" content="https://www.youtube.com/channel/UCoiy7J9wuubiqdvvJvImmMg" />
          <meta property="og:title" content="Ernesto Yoofi - YouTube" />
          <meta property="og:description" content="Waduh, Saya Males Ngasih Deskripsi ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Social Media ?, Linknya Dibawah Bro Instagram : https://www.instagram.com/yoofi.ernesto/ Server Discord :  Facebook : TikTok : https://www.tiktok.com/@ernesto.yoofi_1403 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ✉️ Kontak / Izin : - Email Contact : info.ernestoyoofi@gmail.com - Contact Form : https://ernestoyoofi.github.io/contact ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬" />
          <meta property="og:image" content="http://yt3.ggpht.com/HoGoJ-ZO-XVUNCtG3o2qW4YT2UPlO92gT-sPcqLrwgQexnWqsbRyB73EV3cDeLKBGrqpCo1k9Q=s900-c-k-c0x00ffffff-no-rj" />
          <meta property="og:url" content="https://www.youtube.com/channel/UCoiy7J9wuubiqdvvJvImmMg" />
      </Head>
      <body>
          Reading....
      </body>
  </div>
  )
}

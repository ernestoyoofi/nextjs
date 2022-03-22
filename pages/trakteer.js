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
      router.push('https://trakteer.id/rnestoyoofi')
    }
  }, [user, loading])

  return (
  <div>
      <Head>
          <title>Halaman Karya ernestoyoofi di Trakteer.id</title>
          <link rel="icon" href="/saweria.png"/>
          <meta name="description" content="Daftar sebagai kreator, atur halaman kreatormu, tunjukkan karya-karyamu dan dapatkan apresiasi dan dukungan dana dari penikmat karyamu sesimpel ditraktir barang jajanan" />
          <meta name="twitter:title" content="Halaman Karya ernestoyoofi di Trakteer.id" />
          <meta name="twitter:description" content="Daftar sebagai kreator, atur halaman kreatormu, tunjukkan karya-karyamu dan dapatkan apresiasi dan dukungan dana dari penikmat karyamu sesimpel ditraktir barang jajanan" />
          <meta name="twitter:image" content="https://trakteer.id/storage/images/avatar/ava-hKWS9mHn8UDG1f90oof328vQK7JLWMXs1642329577.jpg" />
          <meta name="twitter:url" content="https://trakteer-id.ernestoyoofi.deploy.id/" />
          <meta property="og:title" content="Halaman Karya ernestoyoofi di Trakteer.id" />
          <meta property="og:description" content="Daftar sebagai kreator, atur halaman kreatormu, tunjukkan karya-karyamu dan dapatkan apresiasi dan dukungan dana dari penikmat karyamu sesimpel ditraktir barang jajanan" />
          <meta property="og:image" content="https://trakteer.id/storage/images/avatar/ava-hKWS9mHn8UDG1f90oof328vQK7JLWMXs1642329577.jpg" />
          <meta property="og:url" content="https://trakteer-id.ernestoyoofi.deploy.id/" />
      </Head>
      <body>
          Reading....
      </body>
  </div>
  )
}

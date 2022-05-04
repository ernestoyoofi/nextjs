import Head from 'next/head'
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { text } = router.query

  return (
    <div>
      <Head>
        <title>{ text }</title>
        <meta name="description" content="👋" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Post

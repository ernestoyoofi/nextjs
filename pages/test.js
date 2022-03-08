import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test Next JS</title>
        <meta name="description" content="Test Next JS" />
        <link rel="icon" href="https://f-ernestoyoofi.vercel.app/file/ernestoyoofi/94425296%20(1).jpeg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Test Next JS! 
        </h1>

        <p className={styles.description}>
            Eee, Aowaowkaowakwk, Test Doang
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Repository Next JS</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/ernestoyoofi/nextjs"
          target="_blank"
          rel="noopener noreferrer" 
          style="text-align: center;"
        >
        Ernestoyoofi Test Next JS
        </a>
      </footer>
    </div>
  )
}

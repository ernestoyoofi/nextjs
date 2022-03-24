import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router"
import Script from 'next/script'
import style from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter();
  
  const navbarclose = () => {
    document.getElementById("navbar").style.marginLeft = "-320px"
  };
  const navbaropen = () => {
    document.getElementById("navbar").style.marginLeft = "0px"
  };
  return (
    <div>
      <Head>
        <title>Spesana - Beranda</title>
        <meta name="description" content="Website Resmi Siswa Siswi SMPN 1 Nanggulan, Karya Anak Spesana, Inc."/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.min.js"></script>
      </Head>
      <main>
        <div className={style.nav_left} id="navbar">
          <span className={style.nav_btn} onClick={() => navbarclose()}><i class="fa-solid fa-angle-left"></i></span>
          <a href="/">Beranda</a>
          <a href="/gallery">Gallery</a>
          <a href="/karya">Karya</a>
          <a href="/docs">Dokument</a>
          <a href="/buku">Buku</a>
        </div>
        <nav>
          <span onClick={() => navbaropen()}>Open</span>
        </nav>
      </main>
    </div>
  )
}

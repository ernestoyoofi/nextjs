import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router"
import Script from 'next/script'
import style from '../styles/Home.module.css'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <meta name="description" content="Website Resmi Siswa Siswi SMPN 1 Nanggulan, Karya Anak Spesana,"/>
      </Head>
      <main>
        <div className={style.nav_left} id="navbar">
          <span className={style.nav_btn} onClick={() => navbarclose()}>Close</span>
        </div>
        <nav>
          <span onClick={() => navbaropen()}>Open</span>
          <FontAwesomeIcon icon={faHome} />
        </nav>
      </main>
    </div>
  )
}

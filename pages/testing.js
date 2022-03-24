import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router"
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import { faBars, faAngleLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link'

export default function Home() {
  const router = useRouter();
  
  const navbarclose = () => {
    document.getElementById("navbar").style.marginLeft = "-270px"
  };
  const navbaropen = () => {
    document.getElementById("navbar").style.marginLeft = "0px"
  };
  return (
    <div>
      <Head>
        <title>Spesana 7B - Beranda</title>
        <meta name="description" content="Website Resmi Siswa Siswi SMPN 1 Nanggulan, Karya Anak Spesana, Inc."/>
      </Head>
      <nav className={styles.nav_left} id="navbar">
        <span className={styles.nav_btn} onClick={() => navbarclose()}><FontAwesomeIcon icon={faAngleLeft} className={styles.icon} style={{ width : '9px'}}/></span>
        <div className={styles.icon_navbar}>
          <img src="/favicon.ico" alt="Icon" />
          <b>Spesana 7B</b>
        </div>
        <b>
          <a>Home</a>
        </b>
        <Link href="/karya">
          <a>Karya</a>
        </Link>
        <Link href="/gallery">
          <a>Gallery</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <a href="https://smpn1nanggulan.sch.id/">Website Sekolah</a>
      </nav>
      <main className={styles.main}>
        <div className={styles.nav_con}>
          <nav className={styles.nav_bar}>
            <span onClick={() => navbaropen()}><FontAwesomeIcon icon={faBars} className={styles.icon} /></span>
            <form action="/pencarian.html">
              <input type="text" name="q" placeholder="Cari"/>
            </form>
          </nav>
        </div>
        <div className={styles.col_card}>
          <div className={styles.content_card}>
            <img className={styles.image} src="/img/tumb/25-07-2021_tumb.jpg" alt="Image Card" width="100%"/>
            <div className={styles.text}>
              <b className={styles.title}>Bumiku, rumahku harus kita jaga agar tetap asri dan sehat.</b>
              <span className={styles.desc}>
              Bumi sebagai tempat hidup segala makhluk harus kita rawat dan jaga agar senantiasa asri dan sehat. Bumiku adalah rumahku. Tempat kita kembali setelah seharian beraktivitas, tempat kita belajar membangun keseimbangan, dan menciptakan harmoni antara alam dan penghuninya.
              </span>
              <p className={styles.status}>14 Jan 2022</p>
              <a href="/karya/kreativitas-tanpa-batas" className={styles.link}>Baca Selengkapnya</a>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.respon_footer}>
          <div className={styles.col_footer}>
            <div className={styles.content_footer}>
              <b>Tentang</b>
              <ul>
                <li><a href="https://www.smpn1nanggulan.sch.id/">Website Resmi SMPN 1 Nanggulan</a></li>
                <li><a href="https://www.google.com/search?q=Ernesto%20yoofi">Web Dibuat Oleh Ernestoyoofi</a></li>
                <li><a href="https://nextjs.org/">Create With Next JS</a></li>
              </ul>
            </div>
            <div className={styles.content_footer}>
              <b>Sosial Media</b>
              <ul>
                <li><a href="https://www.youtube.com/channel/UCV_0pZ0YSmkeMbrAC7Zk5aA"><FontAwesomeIcon icon={faYoutube} className={styles.icon}/>Spesana24</a></li>
                <li><a href="https://www.instagram.com/Spesana24B/"><FontAwesomeIcon icon={faInstagram} className={styles.icon}/>Spesana24</a></li>
                <li><a href="https://github.com/api-spesana"><FontAwesomeIcon icon={faGithub} className={styles.icon}/>Spesana</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

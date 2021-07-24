import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Aimsection from './aimsection'
import Footer from './footer'
import Navbanner from './navbanner'
import Navbar from './navbar'


export default function Home() {
  return (
    <>
    <Head>
      <title>NGO website | Home</title>
      <meta name="keywords" content="ngo website"></meta>
    </Head>
      <div>
        <Navbanner />
        <Navbar />
      <Aimsection />
      <Footer/>
    </div>
    </>  )
}

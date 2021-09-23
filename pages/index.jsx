import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Gallery from '../components/Gallery'

export default function Home() {
  return (
    <>
      <Head>
        <title>kybervystava_Dani</title>
      </Head>
      <Header />
      <Gallery />
      <Footer />
    </>
  )
}

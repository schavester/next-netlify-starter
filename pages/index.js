import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Save LACMA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Save LACMA" />
        <p className="description">
    <img src="https://res.cloudinary.com/on-bunker-hill/image/upload/f_auto/q_auto/v1683590336/savelacma-logo-alt-web_l8yxb9.png">
        </p>
      </main>

      <Footer />
    </div>
  )
}

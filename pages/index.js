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
     </p>
      </main>

      <Footer />
    </div>
  )
}

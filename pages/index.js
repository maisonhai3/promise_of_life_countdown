import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Do's wedding!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="I promise we will have a wedding!" />
        <p className="description">
          That is a promise of <code>my life</code>!!
        </p>
        <p>I working on a countdown timer to the wedding.</p>
        <p>It's in-progress.</p>

        <Header title="But I am re-considering it right now." />
      </main>

      <Footer />
    </div>
  )
}

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Inicio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Valide su Información" />
        <p className="description">
          Siga el enlace para continuar<br>
          <a href="https://google.com">Continuar</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}

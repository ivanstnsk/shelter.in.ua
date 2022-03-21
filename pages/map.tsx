import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Map: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shelter in UA Map</title>
        <meta name="description" content="Shelter in UA Map" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          MAP
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
        </a>
      </footer>
    </div>
  )
}

export default Map

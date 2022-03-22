import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shelter in UA</title>
        <meta name="description" content="Shelter in UA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Головна сторінка у розробці
        </h1>
        <Link href="/map">
          <a>Мапа</a>
        </Link>
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

export default Home

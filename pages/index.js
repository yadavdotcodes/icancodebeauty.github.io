import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aditya Yadav</title>
        <meta name="description" content="Aditya Yadav Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Aditya Yadav 👨‍💻</h1>
      </main>
    </div>
  )
}

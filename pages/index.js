import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Prabhu11D</title>
        <meta name="description" content="Portfolio Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Prabhu11D</h1>
        <p>Here, I&apos;m writing my Journey</p>
        <div className='tags'>
          <p className='tag'>Development</p>
          <p className='tag'>Life</p>
          <p className='tag'>AI</p>
        </div>
      </main>
    </div>
  )
}

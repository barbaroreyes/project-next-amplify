import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LMJ</title>
        <meta name="description" content="Hoy Es un Dia Para Brillar" />
      </Head>
     
      Home Page 
    </div>
  )
}

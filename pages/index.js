import Head from 'next/head'
import Image from 'next/image'
import { data } from '../data'
import Intro from '../public/Intro'
import styles from '../styles/Home.module.css'
import Products from './components/Products';

export default function Home({products}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>LMJ</title>
        <meta name="description" content="Hoy Es un Dia Para Brillar" />
      </Head>
     <Intro/>
     <Products 
     products={products}/>
    </div>
  )
}

export const getStaticProps = async () =>{
 const products = data;
 return {
   props:{products},
 }
}

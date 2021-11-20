import React from 'react'
import styles from '../styles/Intro.module.css'
import Image from 'next/image'
const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
          <h1 className={styles.title}>
             <span className={styles.brand}>
                 La Mango
             </span>
             Jelewry
          </h1>
          <p className={styles.description}>
             Prendas Para Todos Los Gustos 
          </p>
          <button className={styles.button}>Ver Todos Las Jollas </button>
      </div>
      <div className={styles.card}>
          <Image  src='/img/home.jpeg' 
          width='100%'
           height='100%' 
           layout='fill'
           objectFit='cover'
            alt='i'/>
      </div>
    </div>
  )
}

export default Intro

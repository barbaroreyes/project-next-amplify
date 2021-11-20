import React from 'react'
import styles from '../styles/Intro.module.css'
import Image from 'next/image'
import Circle from '../pages/components/Circle'
const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor='#DFC595' top='-50vh' left='-50vh'/>
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
           layout='fill'
           objectFit='cover'
            alt='i'/>
      </div>
    </div>
  )
}

export default Intro

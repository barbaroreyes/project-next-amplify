import React from 'react'
import styles from '../styles/Intro.module.css'

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
      <div className={styles.card}>second</div>
    </div>
  )
}

export default Intro

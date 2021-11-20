import React from 'react'
import styles from '../../styles/Navbar.module.css'
import Link from 'next/link'
const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link href='/'>LMJ</Link>
      <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href='/products/aretes'>Aretes</Link>
         </li>
         <li className={styles.listItem}>
             <Link href='/products/anillos'>Anillos</Link>
             </li>
             <li className={styles.listItem}>
             <Link href='/products/Aritos'>Aretes</Link>
             </li>
             <li className={styles.listItem}>
             <Link href='/products/cadenas'>Anillos</Link>
             </li>
             <li className={styles.listItem}>
             <Link href='/products/Contact'>Contact</Link>
             </li>

      </ul>
    </div>
  )
}

export default NavBar

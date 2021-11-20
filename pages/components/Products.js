import React from 'react'
import styles from '../../styles/Products.module.css'
import Link from 'next/link';
import Image from 'next/image';

const Products = ({products}) => {
  
  return (
    <div className={styles.container}>
      Products
        <h1 className={styles.name}>Todo Por agradar</h1>
        <h1 className={styles.subtitle}>Hoy es Tu dia </h1>
        <div className={styles.products}>
       {products.map((product,i )=> (
         <Link key={i}
         passHref
           href={`/products/${product.name}`}>
           <div className={styles.product}>
             <span className={styles.cat}>{product.name}</span>
             <div className={styles.mediaContainer}>
               {product.video?(
                 <video 
                 src={product.video} 
                 autoPlay 
                 loop 
                 className={styles.video}
                 />
               ):(
                 <Image 
                 src={`/img/${product.photo}`} 
                width='100%'
                height='100%'
                 layout='responsive'
                objectFit='cover'
                 alt='new'/>
               )}
             </div>
           </div>
            </Link>
       ))}
        </div>
      
    </div>
  )
}

export default Products

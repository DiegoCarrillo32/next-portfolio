import Image from 'next/image';
import React from 'react';
import styles from './footer.module.css';
export const Footer = () => {
  return (
    <footer className={styles.grid} >
      <div className={styles.flex}>
        <h4 style={{
          marginTop: '-18px'
        }} >Contacto</h4>
          <span>Email: dcgreenforest@gmail.com</span>
          <span>Phone: (+506) 865543228 </span>
      </div>
      <div className={styles.flex}>
        <h4>Redes</h4>
        <div>

        <a href={"https://github.com/DiegoCarrillo32"} style={{margin:'1rem'}}>
                <Image src={"/github-alt.svg"} height={32} width={32} alt="Github" style={{filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(2deg) brightness(103%) contrast(104%)"}} />
                
              </a>
                <a href={"https://www.linkedin.com/in/diego-carrillo-695a39208/"} style={{margin:'1rem'}}>
                <Image src={"/linkedin.svg"} height={32} width={32} alt="Linked in page" style={{filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(2deg) brightness(103%) contrast(104%)"}} />
                
                </a>
                <a href={"https://www.instagram.com/datacode32/"} style={{margin:'1rem'}}>

                  <Image src={"/instagram.svg"} height={32} width={32} alt="Instagram page" style={{filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(2deg) brightness(103%) contrast(104%)"}} />
                </a>
        </div>
            
      </div>
      
    </footer>
  )
}

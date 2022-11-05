import React from 'react';
import { TfiGithub, TfiInstagram, TfiLinkedin } from 'react-icons/Tfi';
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

          <a href={"https://github.com/DiegoCarrillo32"}>
                <TfiGithub size={32}  style={{
                  cursor:'pointer',
                  margin:'1rem'
                }} />
                </a>
                <a href={"https://www.linkedin.com/in/diego-carrillo-695a39208/"}>
                <TfiLinkedin size={32}  style={{
                  cursor:'pointer',
                  margin:'1rem'
                }}/>
                </a>
                <a href={"https://www.instagram.com/datacode32/"}>

                  <TfiInstagram size={32}  style={{
                    cursor:'pointer',
                    margin:'1rem'
                  }}/>
                </a>
        </div>
            
      </div>
      
    </footer>
  )
}

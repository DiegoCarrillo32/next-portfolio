import Image from 'next/image';
import React from 'react';
import useTranslation from 'next-translate/useTranslation'
import styles from './footer.module.css';
export const Footer = () => {
  const { t } = useTranslation('common')
  return (
    <footer className={styles.grid}>
      <div className={styles.flex}>
        <h4 style={{
          marginTop: '-18px'
        }} >{t('contactme')} </h4>
          <span>{t('email')} : diegocarrilloa@outlook.com</span>
          <span>{t('phone')} : (+506) 85543228 </span>
      </div>
      <div className={styles.flex}>
        <h4>{t('social')} </h4>
        <div>
        <a href={"https://github.com/DiegoCarrillo32"} style={{margin:'1rem'}}>
                <Image src={"/github-alt.svg"} height={32} width={32} alt="Github" style={{filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(2deg) brightness(103%) contrast(104%)"}} />
                
              </a>
                <a href={"https://www.linkedin.com/in/diegocarrillodev/"} style={{margin:'1rem'}}>
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

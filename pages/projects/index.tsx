import Image from 'next/image'
import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import styles from './projects.module.css'
const Projects = () => {
  const { t } = useTranslation('common')
  const projects = [
    {
    name: 'Project YVY',
    description: t('yvyproject'),
    image: '/yvy.png',
    },
    {
    name: 'Portfolio',
    description: t('portfolioproject'),
    image: '/portfolio.png',
    },
    
]
  return (
    <div>
      {
        projects.map((pro)=>(
          <div className={styles.grid} key={pro.name}>
            <div>
              <h2 className={styles.p}  > {pro.name} </h2>
              <h3 className={styles.p1} > {pro.description} </h3>
            </div>
            <Image src={pro.image} alt={pro.description} width={300} height={300}  />

          </div>
          
        ))
      }
    </div>
  )
}

export default Projects
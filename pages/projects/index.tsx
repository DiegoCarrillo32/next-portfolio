import Image from 'next/image'
import React from 'react'
import styles from './projects.module.css'
const Projects = () => {
  const projects = [
    {
    name: 'Project YVY',
    description: 'Project YvY is a web solution where farmers manage their crops and get information about weather, precipitation and soil. It is developed with Angular Framework',
    image: '/yvy.png',
    },
    {
    name: 'Portfolio',
    description: 'My portfolio, developed with Next.js and designed by myself',
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
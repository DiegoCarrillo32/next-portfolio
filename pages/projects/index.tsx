import Image from 'next/image'
import React from 'react'
import styles from './projects.module.css'
const Projects = () => {
  const projects = [
    {
    name: 'Project YVY',
    description: 'Tfi is a social media app that allows users to share their thoughts and ideas with the world. Users can create posts, follow other users, and like and comment on posts. Tfi is built with React, Next.js, and Firebase.',
    image: '/Avatar2.png',
    },
    {
    name: 'Portfolio',
    description: 'Tfi is a social media app that allows users to share their thoughts and ideas with the world. Users can create posts, follow other users, and like and comment on posts. Tfi is built with React, Next.js, and Firebase.',
    image: '/Avatar.png',
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
            <Image src={pro.image} alt={pro.description} width={200} height={200} />

          </div>
          
        ))
      }
    </div>
  )
}

export default Projects
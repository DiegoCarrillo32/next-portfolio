import React from 'react'
import styles from './experience.module.css'
interface Exp {
  title: string,
  company: string,
  date: string,
  description:string
}
const Experience = () => {
  const experience = [
    {
      title: 'Fullstack Developer',
      company: 'Nativo',
      date: '2021 November - February 2022',
      description: 'Worked in Nativo with technologies like Ruby on rails, Mongo, Angular JS',
    },
    {
      title: 'Frontend Developer',
      company: 'Canam Technologic',
      date: '2022 July - September 2022',
      description: 'Worked in CTI with technologies like React developing and designing a mock up',
    },
    {
      title: 'Frontend Developer',
      company: 'Plan 21',
      date: '2021 July - Present',
      description: 'Working in Plan21 with Angular for the YVY project, in companion with IBM and ITCR',
    },
  ]
  const [show, setShow] = React.useState(false)
  const [Active, setActive] = React.useState(experience[0] as Exp)
  return (
    <div className={styles.grid}>
      <ul>
        {experience.map((exp) => (
          <li className={(Active.company == exp.company)? `${styles.li} ${styles.active}` : styles.li } onClick={()=>{
            setActive(exp);
          }} key={exp.company}> <span className={styles.span}>{exp.company}</span> </li>
        ))
        }
      </ul>
      <div className={styles.info} >
        <p className={styles.p}> {Active.title} </p>
        <p className={styles.p}> {Active.date} </p>
        <p className={styles.p1}> {Active.description} </p>
      </div>
    </div>
    
  )
}

export default Experience
import React from 'react'
import Image from 'next/image'
import styles from './navbar.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className={styles['nav-responsive']} id="navbar">
        <div className={styles.space}>
                <a style={{
                    paddingLeft:'50px',
                    cursor:'pointer'
                }} href="#top"><Image src={"/icon-512x512.png"} alt="My Logo" width={100} height={100} /></a>
        </div>
        <ul id='ul'>
            <li>
                <a href='#about'>About</a>
              
            </li>
            <li>
                <a href='#exp'>Experience</a>
              
            </li>
            <li>
                <a href='#project'>Projects</a>
              
            </li>
            <li>
                <a>Contact</a>
              
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
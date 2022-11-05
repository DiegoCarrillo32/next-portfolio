import React from 'react'
import Image from 'next/image'
import styles from './navbar.module.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const handleOpen = () => {
      setIsOpen(!isOpen)
    }
  return (
    <>
        <div className={isOpen ? `${styles['hamburger-active']}` : styles.hamburger} onClick={handleOpen}>
            {
                !isOpen ? 
                (
                    <>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                    </>
                ): 
                (
                <ul id='ul' className={styles.ul}>
                    <li>
                        <a href='#top'>
                            <Image src={"/icon-512x512.png"} alt="My Logo" width={100} height={100} />
                        </a>
                    </li>
                    
                
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
                    <a href='#contact' >Contact</a>
                
                </li>
                <li>
                    <a href='/CVDiegoC.pdf' style={{
                        color:'#61D4F0',
                    }}>Resumé</a>
                
                </li>
            </ul>
                )
            }
        </div>
        <nav className={styles['nav-responsive']} id="navbar">
            <div className={styles.space}>
                    <a style={{
                        paddingLeft:'50px',
                        cursor:'pointer',
                        marginTop:'-12px'
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
                    <a href='#contact' >Contact</a>
                
                </li>
                <li>
                    <a href='/CVDiegoC.pdf' style={{
                        color:'#61D4F0',
                    }}>Resumé</a>
                
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
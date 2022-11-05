import React from 'react'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import styles from './navbar.module.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const { t } = useTranslation('common')
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
                    <a href='#about'>{t('aboutme')} </a>
                
                </li>
                <li>
                    <a href='#exp'>{t('experience')}</a>
                
                </li>
                <li>
                    <a href='#project'>{t('project')}</a>
                
                </li>
                <li>
                    <a href='#contact' >{t('contact')}</a>
                
                </li>
                <li>
                    <a href='/CVDiegoC.pdf' style={{
                        color:'#61D4F0',
                    }}>{t('cv')}</a>
                
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
                    <a href='#about'>{t('aboutme')} </a>
                
                </li>
                <li>
                    <a href='#exp'>{t('experience')}</a>
                
                </li>
                <li>
                    <a href='#project'>{t('project')}</a>
                
                </li>
                <li>
                    <a href='#contact' >{t('contact')}</a>
                
                </li>
                <li>
                    <a href='/CVDiegoC.pdf' style={{
                        color:'#61D4F0',
                    }}>{t('cv')}</a>
                
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
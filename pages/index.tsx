
import type { NextPage } from 'next'
import {motion, useInView} from 'framer-motion'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import styles from '../styles/index.module.css'
import { useEffect, useRef, useState } from 'react';
import {Section} from "../components/section";
import Image from 'next/image';
import { Footer } from '../components/footer';
import Contact from '../components/contact';
import Experience from '../components/experience/index';
import { Spacer } from '../components/spacer';
import Projects from '../components/projects';
import useTranslation from 'next-translate/useTranslation'


const Home: NextPage = () => {


  const aboveImg = useRef(null);
  const isInViewAbove = useInView(aboveImg);
  const [Show, setShow] = useState(false)
  const { t, lang } = useTranslation('common')
  useEffect(()=>{
      const navbar = document.getElementById("navbar")
      const ul = document.getElementById("ul")
      if(isInViewAbove){
          navbar?.style.setProperty("background", "none")
          ul?.style.setProperty("color", "white")
          navbar?.style.setProperty("height", "100px")
          navbar?.style.removeProperty("box-shadow")
      }else{
          navbar?.style.setProperty("background-color", "#3C3C3C")
          ul?.style.setProperty("color", "white")
          navbar?.style.setProperty("height", "80px")
          navbar?.style.setProperty("box-shadow", "0 0 10px 0 rgba(0,0,0,0.5)")
          
      }
  }, [isInViewAbove])

  return (
    <div>
      <div className={styles.container} id="top" >
          <div>
            <section>
              <motion.h1
              className={styles.h1}
              initial={{  x:-600}}
              animate={{ x:0 }}
              transition={{type:'spring', duration:1.5}}
              whileHover={{scale:1.01}}
              onAnimationComplete={()=>{
                setShow(true)
              }}
              >
                <p style={{
                  textShadow: "3px 3px 0px rgb(55, 110, 119)",
                }} >DIEGO CARRILLO</p>
              </motion.h1>
            </section>
            <section>
              <RoughNotationGroup show>
                <RoughNotation type="highlight" color='#60D5F1' show={Show} >
                  <h1 className={styles.h2}>FRONTEND</h1>
                </RoughNotation>
                <RoughNotation type="highlight" color='#639C57' show={Show} animationDelay={200}>
                  <h1 className={styles.h2}>BACKEND</h1>
                </RoughNotation>
              </RoughNotationGroup>

            </section>
            <div style={{
              display:'flex',
              alignItems:'start',
              justifyContent:'flex-start',
              
              

            }}>
              <a href={"https://github.com/DiegoCarrillo32"} style={{margin:'1rem'}}>
                <Image src={"/github-alt.svg"} height={32} width={32} alt="Github" style={{filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(2deg) brightness(103%) contrast(104%)"}} />
                
              </a>
                <a href={"https://www.linkedin.com/in/diego-carrillo-695a39208/"} style={{margin:'1rem'}}>
                <Image src={"/linkedin.svg"} height={32} width={32} alt="Linked in page" style={{filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(2deg) brightness(103%) contrast(104%)"}} />
                
                </a>
                <a href={"https://www.instagram.com/datacode32/"} style={{margin:'1rem'}}>

                  <Image src={"/instagram.svg"} height={32} width={32} alt="Instagram page" style={{filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(2deg) brightness(103%) contrast(104%)"}} />
                </a>
                {
                  lang === 'en' ?
                  <a href={"/es"} style={{margin:'1rem'}}>
                    <Image src={"/spain.svg"} height={32} width={34} alt="Spanish site" />
                  </a>
                  :
                  <a href={"/"} style={{margin:'1rem'}}>
                    <Image src={"/usa.svg"} height={32} width={34} alt="English site"  />
                  </a>
                }
              
            
            </div>
          </div>

        <div  id='above-img' ref={aboveImg} style={{
          width: '100%',
          height: '20px',
          marginBottom: '10px'
        }}></div>
      </div>
      
      <Spacer id={"about"}/>
        <Section color={"#3d3d3d"} >
            <article  className={styles.article}>
              <div style={{
                backgroundColor:'#376E77',
                borderRadius:'25px 50px 25px 100px',
                boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
                overflow:'hidden',
                
              }}>
                <Image src={"/AvatarMaker.svg"} alt="Me" height={800} width={700} />
              </div>
            </article>
            
            <article className={styles.article}  >
              <h1 className={styles.h1}>{t('aboutme')}</h1>
              <p style={{
                fontWeight:'100',
              }}> {t('about')} </p>
            </article>

        </Section>
        
      <Spacer id={"exp"}/>
        <Section color={'#3C3C3C'} bg={true}   >
            
            <article className={styles.article} >
              <h1 className={styles.h1}> {t('wherework')} </h1>
              <Experience/>
            </article>
            <div  />
        </Section>
        
      <Spacer id={"project"}/>
        <Section color={'#3d3d3d'}  >
            
            <article className={styles.article} >
                <h1 className={styles.h1}>{t("whatbuilt")}</h1>
                <Projects/>
            </article>
            <div />
        </Section>
        <Spacer id={"contact"} />

        <Section color={"#25242B"}>
          <div>
            <h1 className={styles.h1}>{t('contact')}</h1>
            <Contact/>
          </div>
          <Image src={"/AvatarMaker.svg"} alt="Me" height={500} width={500} style={{
            opacity:'0.5',
            filter:'grayscale(100%)'
          }} />
        </Section>
        
        <Footer/>
    </div>
  )
}

export default Home

"use client"
import React from 'react'
import Image from "next/image"
import styles from './header.module.css'

import {Link} from "react-scroll"


import {FiMousePointer} from "react-icons/fi"
import {FaSearch} from "react-icons/fa"
import {BsArrowDownSquare} from "react-icons/bs"

import {permanent_marker, roboto_mono} from "./fonts"


import { useRouter }  from "next/navigation"

const Header = () => {
  const router = useRouter()

  return (
    <div>
      
      <div className={styles.top}>
         <Link className={styles.linktop} to="Learning" smooth duration={2000}>
        <h2 className={permanent_marker.className}>Learning</h2>
        </Link>

         <Link className={styles.linktop} to="Startups" smooth duration={1000}>
        <h2 className={permanent_marker.className}>Startups</h2>
        </Link>
      </div>
  
      <div className={styles.primary}>
      <h1 className={roboto_mono.className} >
        I&apos;m Finn,the person who will teach you how to learn effectively.
         I&apos;m also the  founder of   <span className={styles.links}  onClick={() => window.open('https://www.codingnotes.io')} > codingnotes.io</span> and am building my learning app <span className={styles.links2} onClick={() => window.open('https://www.pali.best')}>pali.best</span> atm. 
      </h1>

      </div>


        <Link className={styles.linktop} to="Startups" smooth duration={1000}>
     <div className={styles.search}>
      <span  className={permanent_marker.className}>Find all my stuff  </span>
      <button type="button" className={styles.primarybutton}>
      <FaSearch className={styles.searchicon}/>

      </button>
    </div>
      </Link>
      

      
   

    
   
   {/* DO VIDEO OF YOURSELF; TAKING ABOUT WHO YOU ARE; CODINGNOTES; PALI -> IDEA; SUCCESS ; LEARN2LEARN NEWSLETTER + I CAN 
   MAKE WEBSITES/NOTION TEMPLATES FOR YOU  ( in under 100 seconds ( "this is who i am in 100 seconds "))*/}

    <div className={styles.videoPrimary}>
        <video  loop controls autoPlay muted  >
        <source src="./finnguha_intro_vid_final_1.mp4" />
      </video>
      </div>
     
  
      
      
    </div>




  )

}

export default Header
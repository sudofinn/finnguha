import React from 'react'
import styles from './aboutme_short.module.css'

import Image from "next/image"
import Arrow from "../assets/Vector 21_1.png"

import ArrowSm from "../assets/Vector 5.png"

import { Tweet } from 'react-tweet'




import FinnGuhaPic from "../assets/finnguha_photo_cutshort.png"

import {FiMousePointer} from "react-icons/fi"


//actual video https://www.youtube.com/watch?v=qrTHDAbPN9I
import {permanent_marker, roboto_mono} from "./fonts"

const AboutMeShort = () => {
  return (
    <div className={styles.primary}>
      <div className={styles.primary1}>
        <h1 className={roboto_mono.className}>Thinks I like</h1>
        <ul className={roboto_mono.className}> 
        <li>Coding</li>
        <li>Building startups</li>
        <li>Studying math, physics and history</li>
        <li>Reading fantasy</li>
        </ul>
        <p className={permanent_marker.className}>That&apos;s me btw</p>
        <Image className={styles.imgarrow} src={ArrowSm} alt="Arrow small" />
      </div>
     
     
       <Image src={FinnGuhaPic} alt="Pic of Finn Guha" className={styles.imagep} />
       
      <div className={styles.tweets}>
         <div data-theme="dark">
        <Tweet id="1691812641189073093" />
       </div>
          
      <div data-theme="dark">
        <Tweet id="1686317172262338560" />
       </div>

      </div>


       <div> 

       </div>
        

    </div>
  )
}

export default AboutMeShort
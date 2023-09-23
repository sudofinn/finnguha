"use client"
import React from 'react'
import Image from "next/image"


import styles from './newsletter_short.module.css'


import { useRouter } from 'next/navigation'

import {permanent_marker, roboto_mono} from "./fonts"

import LeftImg from "../assets/newsletter_short_left.png"
import RightImg from "../assets/newsletter_short_right.png"

import ForDesktop from "../assets/learn2learnnewsletterbig.png" 
import ForMobile from "../assets/laern2learnformobile.png"


const NewsletterShort = () => {
  const router = useRouter()
  return (
    <div id="Learning">
    <div className={styles.primary}>
         <h1 className={roboto_mono.className}>
        If you want to become an efficient learner , consider joining my newsletter 
           <span className={styles.links}  onClick={() => router.push('https://www.pali.best')}> learn2learn.club</span> , where we discuss how one learns. 
           You will also get exclusive access to a Study Discord community and hear the lastest news 
           about <span className={styles.links2}  onClick={() => router.push('https://www.pali.best')}> pali.best </span> . I see you in there !
         </h1>
         
    </div>
    <div className={styles.btn}>
        <button  className={permanent_marker.className}  onClick={() => window.open('https://learn2learn.club')} >Start learning 2 learn</button>
        </div>

     <div className={styles.imgsection}>
          <Image src={ForDesktop} alt="for Desktop " className={styles.imgdesktop} />
         <Image src={ForMobile} alt="For mobile" className={styles.imgmobile} />
     </div>

    </div>
  )
}

export default NewsletterShort
"use client"
import React from 'react'
import Image from "next/image"


import styles from './websitenotiontemplateoffer_short.module.css'

import { useRouter } from 'next/navigation'

import {permanent_marker, roboto_mono} from "./fonts"

import RightImg from "../assets/freelanceos_aeshetics_example 1.png"
import MobileImg from "../assets/monofocus_2_pics.png"

const WebsiteNotionTemplateOffer = () => {
  const router = useRouter()
  return (
    <div className={styles.full}>
    <div className={styles.primary}>
         <h1 className={roboto_mono.className}>
        And btw, I&apos;m also good at making <span className={styles.links}>website</span> and 
        <span className={styles.links2}> notion templates</span>. So if you need one of these things, 
        shoot me a message and we will get it done. <br/>
         <div className={styles.btn}>
        <button  className={permanent_marker.className}  onClick={() => router.push('/contact')}>Contact me</button>
        </div>
         </h1>

         </div>

        <div className={styles.secondary}> 
         <Image src={RightImg} alt="Right img" className={styles.img} />
         <Image src={MobileImg} alt="Mobile img" className={styles.mobileimg} />

        </div>


    </div>
  )
}

export default WebsiteNotionTemplateOffer
"use client"
import React from 'react'
import Link from "next/link"
import Image from "next/image"

import { useRouter } from 'next/navigation'

import styles from './page.module.css'

import { Tweet } from 'react-tweet'


import CNPackages from "../../assets/freelanceos_banner_simple.png"
import CNPackagesSm from "../../assets/freelanceos_mockup_sm.jpeg"
import CNFeedback from "../../assets/freelanceos_cta.png"
import CNTweets from "../../assets/freelanceos_tweets.png"
//then some viral tweets from @coding_notes
import JSMediumSalary from "../../assets/freelancoes_4screenshot.png"

import {permanent_marker, roboto_mono} from "../fonts"
import {FiMousePointer} from "react-icons/fi"

import Footer from '../footer'


const CodingnotesLong = () => {
  const router = useRouter()
  return (
    <div>
    <div className={styles.primary}>
        <h1 className={roboto_mono.className}> <Link href="https://freelanceos.pro" className={styles.link} target="_blank"> <FiMousePointer  className={styles.pointer} /> FreelanceOS.pro </Link> 
        is a a sytsem to manage your Freelance Business with ease. 
        </h1>

        <Image className={styles.img1} src={CNPackages} alt="CN package" />
        <Image  className={styles.img1Sm} src={CNPackagesSm} alt="CN package" />
        <h3 className={roboto_mono.className}>The Freelance OS is a Notion Template for freelancers with which freelancers can mange their days with ease. Instead of spending an hour each day not knowing 
          how to organize yourself, you have everything you need to focus on your work, not your bureaucracy.
        </h3>


        <Image className={styles.img2} src={CNFeedback} alt="CN package" />
        <h3 className={roboto_mono.className}>
          I have spend months building this system from the ground up, working closely together with freelancers and working houndreds of hours on creating the 
          perfect Operating System.
        </h3>

        


        <Image className={styles.img2} src={CNTweets} alt="CN package" />
        <h3 className={roboto_mono.className}>
          Freelancers can profit from a proper system to manage their lives. The Freelance OS is the system that
          can do this.
        </h3>



        <Image className={styles.img2} src={JSMediumSalary} alt="CN package" />
        <h3 className={roboto_mono.className}>
          Freelancers in the US make $20 per hour. Imagine spending 1 hour a day organizing your messy system when you can spend 
          $40 on getting a system which eliminiates this friction. And on average,  you even make your money back in 2 hours. 
        </h3>

         <div className={styles.btn}>
        <button type="button" onClick={() => window.open("https://freelanceos.pro")}  className={permanent_marker.className}>Check out the Freelance OS</button>
        </div>

      
      
        

    </div>
    <Footer />
    </div>
  )
}

export default CodingnotesLong
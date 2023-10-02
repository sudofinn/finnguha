"use client"
import React from 'react'
import Link from "next/link"
import Image from "next/image"

import { useRouter } from 'next/navigation'

import styles from './page.module.css'

import { Tweet } from 'react-tweet'


import Header from "../../assets/pali_header.png"
import HeaderSm from "../../assets/pali_header_sm.png"
import HeaderExtraSm from "../../assets/pali_header_smextra.png"

import Timeline from "../../assets/pali_timeline.png"
import CNFeedback from "../../assets/codingnotes_feedback_01.png"
//then some viral tweets from @coding_notes
import NotifyFooter from "../../assets/pali_footer.png"
import JSMediumSalary from "../../assets/javascritpmediumsalarytwitterad01f.png"

import {permanent_marker, roboto_mono} from "../fonts"
import {FiMousePointer} from "react-icons/fi"

import Footer from '../footer'


const CodingnotesLong = () => {
  const router = useRouter()
  return (
    <div>
    <div className={styles.primary}>
        <h1 className={roboto_mono.className}> <Link href="https://pali.best" target="_blank" className={styles.link}> <FiMousePointer  className={styles.pointer} /> Pali.best  </Link> will be the future
        of learning. It is a flashcard app I&apos;m building atm which combines everything everything one needs and maybe a bit more to study efficiently.
        </h1>

        <Image className={styles.img1} src={Header} alt="Header" />
        <Image  className={styles.img1Sm} src={HeaderSm} alt="Header sm" />
        <Image  className={styles.img1SmExtra} src={HeaderExtraSm} alt="Header extra sm" />
        <h3 className={roboto_mono.className}>Everybody has a way to learn something. However, most often it&apos;s highly ineffective. 
        There are apps that make the process easier and more fun but with no app you can learn while doing something else.
        With Pali, you can
        </h3>


        <Image className={styles.img2} src={Timeline} alt="timeline" />
        <h3 className={roboto_mono.className}>
          With Pali, you can learn anywhere at anytime. It uses every scientific fact available combined with numerous way of studying cards to ensure 
          you learn as productive as possible. 
        If you want to follow the process, check out <Link href="https://x.com/palidotbest" target="_blank" className={styles.link1}> @palidotbest</Link> .

        </h3>

        <div className={styles.tweet}>
            <div data-theme="dark"  className={styles.tweetl} >
          <Tweet id="1692883196252213416" />
          </div>

            <div data-theme="dark" className={styles.tweetr} >
          <Tweet id="1676312742733512704" />
          </div>
        </div>


        <h3 className={roboto_mono.className}>
          I am sure that you have something to learn right now. If you would like to have a dedicated community which supports your journey, 
          check out the Learn2Learn community at  <Link href="https://learntolearn.club" target="_blank" className={styles.link1}>learn2learn.club</Link>. 
        </h3>



        <Image className={styles.img2} src={NotifyFooter} alt="footer" />
        <h3 className={roboto_mono.className}>
            I will share my progress on the app. If you want exclusive insights and a study community, check out the learn2learn community.
        </h3>

         <div className={styles.btn}>
        <button type="button" onClick={() => window.open("https://pali.best")}  className={permanent_marker.className}>Check out Pali</button>
        </div>

      
      
        

    </div>
    <Footer />
    </div>
  )
}

export default CodingnotesLong
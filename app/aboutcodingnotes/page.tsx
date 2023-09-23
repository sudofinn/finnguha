"use client"
import React from 'react'
import Link from "next/link"
import Image from "next/image"

import { useRouter } from 'next/navigation'

import styles from './page.module.css'

import { Tweet } from 'react-tweet'


import CNPackages from "../../assets/codingnote_package_screenshot_1.png"
import CNPackagesSm from "../../assets/codingnotes_header_1pic_color.png"
import CNFeedback from "../../assets/codingnotes_feedback_01.png"
//then some viral tweets from @coding_notes
import JSMediumSalary from "../../assets/javascritpmediumsalarytwitterad01f.png"

import {permanent_marker, roboto_mono} from "../fonts"
import {FiMousePointer} from "react-icons/fi"

import Footer from '../footer'


const CodingnotesLong = () => {
  const router = useRouter()
  return (
    <div>
    <div className={styles.primary}>
        <h1 className={roboto_mono.className}> <Link href="https://codingnotes.io" className={styles.link} target="_blank"> <FiMousePointer  className={styles.pointer} /> CodingNotes.io </Link> teaches you programming
            with detailed notes and comprehensive flashcards.
        </h1>

        <Image className={styles.img1} src={CNPackages} alt="CN package" />
        <Image  className={styles.img1Sm} src={CNPackagesSm} alt="CN package" />
        <h3 className={roboto_mono.className}>I have been building this business for a year now. Orginaly ,  these notes and flashcards were  simply for myself but eventually, I figured out that 
          selling them would potentially be a great business idea. So I made a beautiful website, launched on Product Hunt and grew 
          the business ever since. Recently, I also started posting regulary on X at <Link href="https://x.com/coding_notes" target="_blank" className={styles.link1}>@coding_notes</Link> .
        </h3>


        <Image className={styles.img2} src={CNFeedback} alt="CN package" />
        <h3 className={roboto_mono.className}>
          As of today, CodingNotes has more than 1,000 customers from more than 50 countries. People from all over the world think that learning programming with the help of notes
          and flashcards benefits them.
        </h3>

        <div className={styles.tweet}>
            <div data-theme="dark"  className={styles.tweetl} >
          <Tweet id="1696992512177566014" />
          </div>

            <div data-theme="dark" className={styles.tweetr} >
          <Tweet id="1697247335137648902" />
          </div>
        </div>


        <h3 className={roboto_mono.className}>
          If you want to get better at web development, check out the official X account <Link href="https://x.com/coding_notes" target="_blank" className={styles.link1}>@coding_notes</Link>. Expect daily challenges ,
          guides and memes around  the world of programming.
        </h3>



        <Image className={styles.img2} src={JSMediumSalary} alt="CN package" />
        <h3 className={roboto_mono.className}>
          People make a ton of money writing code on a screen. And with CodingNotes, you spend between 5-20 dollars ONCE to learn the skills which can make you &gt;$100k/YEAR. Seems like a good deal, doesn&apos;t it ?
        </h3>

         <div className={styles.btn}>
        <button type="button" onClick={() => window.open("https://codingnotes.io")}  className={permanent_marker.className}>Check out CodingNotes</button>
        </div>

      
      
        

    </div>
    <Footer />
    </div>
  )
}

export default CodingnotesLong
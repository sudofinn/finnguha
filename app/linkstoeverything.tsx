"use client"
import React from 'react'
import Image from "next/image"
import styles from "./linkstoeverything.module.css"


import { useRouter } from 'next/navigation'

import CodingNotesThumbnail from "../assets/codingnotes_thumbnail.png"
import FreelanceOSThumbnail from "../assets/freelanceos_youtube_watermark.png"
import PaliThumbnail from "../assets/pali_favicon.png"
import Learn2LearnThumbnail from "../assets/learntolearnfirsticon.png"
import WebsiteThumbnail from "../assets/finnguha_favicon_1.png"
import NotionTemplateThumbnail from "../assets/notion-icon.png"




import {permanent_marker, roboto_mono} from "./fonts"

const LinkstoEverything = () => {
  const router = useRouter()
  

  return (
    <div className={styles.btnPrimary}>
         
        <button className={roboto_mono.className} onClick={() => window.open('https://codingnotes.io')}> 
        <Image src={CodingNotesThumbnail} alt="CN" width={100}
      height={100} />
        Learn more about CodingNotes , the place to learn web development  with notes and flashcards 
        </button>


        <button className={roboto_mono.className} onClick={() => window.open('https://freelanceos.pro')} > 
        <Image src={FreelanceOSThumbnail} alt="CN" width={100}
      height={100} />
        If you&apos;re a freelancer, you will love the Freelance Operating System. Learn more about it here.
        </button>


        <button className={roboto_mono.className} onClick={() => window.open('https://pali.best')}> 
        <Image src={PaliThumbnail} alt="CN" width={100}
      height={100} />
        Have a look at Pali - the next level learning app I&apos;m building atm
        </button>


        <button className={roboto_mono.className} onClick={() => window.open('https://learn2learn.club')}> 
        <Image src={Learn2LearnThumbnail} alt="CN" width={100}
      height={100} />
        Subscribe to the Learn2Learn newsletter which teaches you how to learn ,
            give you a community of likeminded individuals and updates on Pali
        </button>

        <button className={roboto_mono.className} onClick={() => router.push('/contact')}> 
        <Image src={WebsiteThumbnail} alt="CN" width={100}
      height={100} />
        Want a website for yourself or your business ? I&apos;m the one who gets it done for you
        </button>


        <button className={roboto_mono.className} onClick={() => router.push('/contact')}> 
        <Image src={NotionTemplateThumbnail} alt="CN" width={100}
      height={100} />
        I love Notion and been using it for years. If you want a custom Notion Template for any purpose, I got you.
        </button>

        


        
        


    </div>
  )
}

export default LinkstoEverything
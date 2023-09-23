"use client"
import React from 'react'
import Image from "next/image"
import Link from "next/link";


import { useRouter } from 'next/navigation'


import styles from "./mycontent.module.css"
import {permanent_marker, roboto_mono} from "./fonts"

import {AiFillFire} from "react-icons/ai"


import CodingNotesBanner from "../assets/codingnotes_header_pw.png"
import DummyBanner from "../assets/freelanceos_header_pw.png"
import SimpleDashboardBanner from "../assets/simpledashboard_header_pw.png"
import MonoFocusBanner from "../assets/monofocusos_header_pw.png"
import MoodboardBanner from "../assets/moodboard_header_pw.png"
import AnkiGuideBanner from "../assets/ankiguide_header_pw.png"

//random underlines for some reason once I implemented <Link>

const MyContent = () => {
    const router = useRouter()
  return (
    <div className={styles.primary}>
         <h1 className={roboto_mono.className}>
        I know what you need. Here are templates, guides and courses to get better at learning, coding and building startups.
        <AiFillFire className={styles.pointer} /> 
          
         </h1>

        <div className={styles.container}>
        <div className={styles.container_box}>
            <Link href="https://codingnotes.io" target="_blank">
            <div className={styles.box}>
                <Image className={styles.imgp} src={CodingNotesBanner} alt="one"/>
                <h3 className={roboto_mono.className}>CodingNotes</h3>
                <p className={roboto_mono.className}>Notes and flashcards to learn coding.</p>
                <button  className={permanent_marker.className} onClick={() => window.open('https://codingnotes.io')}>Explore </button>

            </div>
            </Link>
            <Link href="https://freelanceos.pro" target="_blank">
             <div className={styles.box}>
                <Image className={styles.imgp} src={DummyBanner} alt="one"/>
                <h3 className={roboto_mono.className}>Freelance OS</h3>
                <p className={roboto_mono.className}>A system to manage your freelancing business.</p>
                <button className={permanent_marker.className} onClick={() => window.open('https://freelanceos.pro')}>Explore </button>
            </div>
            </Link>

            <Link href="https://vimfinn.gumroad.com/l/simpledashboard?layout=profile" target="_blank">
             <div className={styles.box}>
                <Image className={styles.imgp} src={SimpleDashboardBanner} alt="one"/>
                <h3 className={roboto_mono.className}>The Simple Dashboard</h3>
                <p className={roboto_mono.className}>An easy system to structure your day.</p>
                <button className={permanent_marker.className} onClick={() => window.open('https://vimfinn.gumroad.com/l/simpledashboard?layout=profile')}>Explore </button>
            </div>
            </Link>


            <Link href="/" target="_blank">
             <div className={styles.box}>
                <Image className={styles.imgp} src={AnkiGuideBanner} alt="one"/>
                <h3 className={roboto_mono.className}>The complete Anki guide</h3>
                <p className={roboto_mono.className}>Science, methods and tips on the digital flashcard app.</p>
                <button className={permanent_marker.className} onClick={() => window.open('/')}>Explore</button>
            </div>
            </Link>

            <Link href="https://vimfinn.gumroad.com/l/monofocus?layout=profile" target="_blank">
             <div className={styles.box}>
                <Image className={styles.imgp} src={MonoFocusBanner} alt="one"/>
                <h3 className={roboto_mono.className}>Mono Focus OS</h3>
                <p className={roboto_mono.className}>A  template for a focused life.</p>
                <button className={permanent_marker.className} onClick={() => window.open('https://vimfinn.gumroad.com/l/monofocus?layout=profile')}>Explore</button>
            </div>
            </Link>


            <Link href="https://vimfinn.gumroad.com/l/programmingmoodboardorganizer?layout=profile" target="_blank">
             <div className={styles.box}>
                <Image className={styles.imgp} src={MoodboardBanner} alt="one"/>
                <h3 className={roboto_mono.className}>Programming Mood Board and Organizer</h3>
                <p className={roboto_mono.className}>A simple and fun to use sytem for coders.</p>
                <button className={permanent_marker.className} onClick={() => window.open('https://vimfinn.gumroad.com/l/programmingmoodboardorganizer?layout=profile')}>Explore</button>
            </div>
            </Link>

           
        </div>
    </div>





    </div>
  )
}

export default MyContent
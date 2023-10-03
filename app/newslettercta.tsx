"use client"
import React from 'react'
import Image from "next/image"
import styles from "./newslettercta.module.css"


import { useRouter } from 'next/navigation'


import {FiMousePointer} from "react-icons/fi"
import {FiSend} from "react-icons/fi"

import Learn2LearnCTAPic from "../assets/learn2learnctapic.png"
import FinnGuhaSignature from "../assets/finnguha_signature.png"
import Arrow from "../assets/Vector 21_1.png"

import {permanent_marker, roboto_mono} from "./fonts"

{/* if this does not work, make at simply ( just everything center, no side by side ) */}

const Newslettercta = () => {
  const router = useRouter()
  return (
    <div className={styles.body}>

    <div className={styles.subscribe}>

    <div className={roboto_mono.className} >
	<h2 className={styles.headingp}>The <span className={styles.links} onClick={() => window.open('https://learn2learn.club')}> <FiMousePointer className={styles.pointer} />Learn2Learn</span> newsletter is free, teaches you how to learn and gives you an exclusive study community. Join it here !</h2>
  
	<form className={styles.form}
        action= {process.env.NEXT_PUBLIC_KEY}
              method="POST">
		<input  name="email" type="email" className={permanent_marker.className}  placeholder="Enter your email address" />
		<button ><FiSend /> </button>
	</form>
	
	
	
</div>
</div>

   <Image src={Learn2LearnCTAPic } alt="L2L" className={styles.ctapic} />

</div>
  )
}

export default Newslettercta
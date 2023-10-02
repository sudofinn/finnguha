import React from 'react'
import Link from "next/link"

import {FiSend} from "react-icons/fi"
import {FiMousePointer} from "react-icons/fi"


import {RiTwitterXLine} from "react-icons/ri"
import {SiMedium} from "react-icons/si"
import {TfiEmail} from "react-icons/tfi"

import styles from "./page.module.css"
import {permanent_marker, roboto_mono} from "../fonts"

import Footer from '../footer'

const page = () => {
  return (
    <div className={styles.primary}>

    <h1 className={roboto_mono.className}> 
      If you have any questions, contact me !
        </h1>
         <Link href="https://x.com/finnguha" target="_blank">
         <div className={styles.social}>
            <h3 className={roboto_mono.className}>DM me on X ( fka Twitter )</h3>
           <RiTwitterXLine className={styles.socialtwitter} />
        </div>
        </Link>


      <Link href="mailto:finnguha@gmail.com" >
         <div className={styles.social}>
            <h3 className={roboto_mono.className}>Send me an email</h3>
            <TfiEmail className={styles.socialtwitter} />
        </div>
        </Link>

        <form action= {process.env.NEXT_PUBLIC_KEY}
              method="POST"
               className={styles.form}>
		<input type="name" className={permanent_marker.className}  placeholder="Enter your name" />
		<input type="email" className={permanent_marker.className}  placeholder="Enter your email address" />

    <div className={styles.form2}>
		<button type="button" className={permanent_marker.className}>Let&apos;s talk ! <FiSend /></button>
    </div>
	</form>

  <Footer />



    </div>
  )
}

export default page
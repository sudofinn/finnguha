"use client"
import React from 'react'
import styles from "./footer.module.css"

import Link from "next/link"

import {RiTwitterXLine} from "react-icons/ri"
import {SiMedium} from "react-icons/si"
import {TfiEmail} from "react-icons/tfi"


import { useRouter }  from "next/navigation"


import {roboto_mono, permanent_marker,dancing_script} from "./fonts"

const Footer = () => {
  const router = useRouter()

  return (
    <div className={styles.outer}>
         <h1 className={dancing_script.className} onClick={() => router.push('/')}>Finn Guha</h1>
         

        <div className={styles.social}>
            <Link href="https://x.com/finnguha" target="_blank"><RiTwitterXLine className={styles.socialtwitter} /></Link>
            <Link href="https://medium.com/@vimfinn" target="_blank"> <SiMedium className={styles.socialmedium} /></Link>
            <Link href="mailto:finnguha@gmail.com"><TfiEmail className={styles.socialemail} /></Link>

        </div>

    
    <div className={styles.primary}>

        
       

       
            <Link href="/terms"><h3 className={roboto_mono.className}>Terms and Conditions</h3></Link>
            <Link href="/privacy"><h3 className={roboto_mono.className}>Privacy Policy</h3></Link>
            <Link href="/cookies"><h3 className={roboto_mono.className}>Cookie Policy</h3></Link>
           <Link href="/impressum"> <h3 className={roboto_mono.className}>Impressum</h3></Link>
            <Link href="/contact"><h3 className={roboto_mono.className}>Contact</h3></Link>
    </div>


    </div>
  )
}

export default Footer
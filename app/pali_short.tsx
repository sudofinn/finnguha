"use client"
import React from 'react'
import Image from "next/image"

import styles from './pali_short.module.css'

import { useRouter } from 'next/navigation'


import { Tweet } from 'react-tweet'

import {permanent_marker, roboto_mono} from "./fonts"

import PaliBackground from "../assets/palibackgroundtwitter_01.png"

const PaliShort = () => {
  const router = useRouter()
  return (
    <div>
        <div className={styles.primary}>
         <h1 className={roboto_mono.className}>
        Learn anytime, anywhere.
         That&apos;s the idea of  <span className={styles.links}  onClick={() => window.open('https://www.pali.best')}>pali.best</span> , a learning app I&apos;m building in public. 
         </h1>
        </div>

        <div className={styles.btn}>
        <button type="button" onClick={() => router.push('/aboutpali')}   className={permanent_marker.className}>This is Pali</button>
        </div>

        <div className={styles.tweet}>
            <div data-theme="dark"  className={styles.tweetl} >
          <Tweet id="1680988940147257344" />
          </div>

            <div data-theme="dark" className={styles.tweetr} >
          <Tweet id="1681322313403314178" />
          </div>
        </div>



    </div>
  )
}

export default PaliShort
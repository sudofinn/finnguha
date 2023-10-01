"use client"
import React from 'react'


import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

import styles from './codingnotes_short.module.css'

import Image from "next/image"
import Arrow from "../assets/Vector 21_1.png"

import CNImg from "../assets/codingnotes_thumbnail.png"

import { useRouter } from 'next/navigation'



import {FiMousePointer} from "react-icons/fi"

//import YouTube from 'react-youtube';

//actual video https://www.youtube.com/watch?v=qrTHDAbPN9I
import {permanent_marker, roboto_mono} from "./fonts"

const CodingnotesShort = () => {

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])


   const router = useRouter()

  
 
  
  return (
    <div id="Startups" >
      <div className={styles.primary1}>
        <h1 className={roboto_mono.className}>I grew <span className={styles.span1}  onClick={() => window.open('https://www.codingnotes.io')}> <FiMousePointer  className={styles.pointer} /> codingnotes.io</span> to over 1,000 customers from 50 countries. It provides you with detailed notes
            and flashcards for programming languages.
        </h1>
        <div className={styles.btn}>
        <button type="button" onClick={() => router.push('/aboutcodingnotes')}  className={permanent_marker.className}>Learn more</button>
        </div>
      </div>

       <div className={styles.playerWrapper}> 
        {isLoaded ? (
      <ReactPlayer
        url="https://www.youtube.com/watch?v=qrTHDAbPN9I" className={styles.player}
         width='100%'
          height="1000px"
          controls
      />
    ) : null}

       </div>

        <div className={styles.playerWrapper2}> 
        {isLoaded ? (
      <ReactPlayer
        url="https://www.youtube.com/watch?v=qrTHDAbPN9I" className={styles.player2}
           width='100%'
          height='400px'
          controls
      />
    ) : null}

       </div>

         <div className={styles.playerWrapper3}> 
        {isLoaded ? (
      <ReactPlayer
        url="https://www.youtube.com/watch?v=qrTHDAbPN9I" className={styles.player3}
           width='100%'
          height='300px'
          controls
      />
    ) : null}

       </div>
        
    
  
       

     
        

    </div>
  )
}

export default CodingnotesShort
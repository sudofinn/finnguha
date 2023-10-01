"use client"
import React from 'react'


import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

import styles from './freelanceos_short.module.css'

import Image from "next/image"
import Arrow from "../assets/Vector 21_1.png"


import { useRouter } from 'next/navigation'



import {FiMousePointer} from "react-icons/fi"

//import YouTube from 'react-youtube';

//actual video https://www.youtube.com/watch?v=qrTHDAbPN9I
import {permanent_marker, roboto_mono} from "./fonts"

const FreelanceOSShort = () => {

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])



   const router = useRouter()
 
  
  return (
    <div >
      <div className={styles.primary1}>
        <h1 className={roboto_mono.className}>I&apos;m also the founder of  <span className={styles.span1}  onClick={() => window.open('https://www.freelanceos.pro')}> <FiMousePointer  className={styles.pointer} /> freelanceos.pro </span> , an all-in-one management system for freelancers.
        </h1>
        <div className={styles.btn}>
        <button type="button" onClick={() => router.push('/aboutfreelanceos')}  className={permanent_marker.className}>Learn more</button>
        </div>
        {/*<Image src={Arrow} alt="Arrow" width={300} height={500} /> */}
      </div>

       <div className={styles.playerWrapper}> 
        {isLoaded ? (
      <ReactPlayer
        url="https://www.youtube.com/watch?v=6u0j25ewEqE" className={styles.player}
         width='100%'
          height="1000px"
          controls
      />
    ) : null}

       </div>

         <div className={styles.playerWrapper2}> 
        {isLoaded ? (
      <ReactPlayer
        url="https://www.youtube.com/watch?v=6u0j25ewEqE" className={styles.player2}
         width='100%'
          height='400px'
          controls
      />
    ) : null}

       </div>

         <div className={styles.playerWrapper3}> 
        {isLoaded ? (
      <ReactPlayer
        url="https://www.youtube.com/watch?v=6u0j25ewEqE" className={styles.player3}
         width='100%'
          height='300px'
          controls
      />
    ) : null}

       </div>
        
    
  
       

     
        

    </div>
  )
}

export default FreelanceOSShort
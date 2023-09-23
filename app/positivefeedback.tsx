import React from 'react'
import Image from "next/image"


import styles from './positivefeedback.module.css'

import {permanent_marker, roboto_mono} from "./fonts"

import AGrid from "../assets/producthuntupvotessymbol.png"
import AGridSm from "../assets/producthuntupvotessymbol_sm.png"
import BGrid from "../assets/producthunt5thplacebadge.png"
import BGridSm from "../assets/producthunt5thplacebadge_sm.png"
import CGrid from "../assets/codingnotes5startrating_codingnotesfeedback.png"
import CGridSm from "../assets/5starrating_sm_codingnotesgeneral.png.png"
import EGrid from "../assets/niceworkonthelaunchofyourproduct_codingnotesfeedback.png"
import EGridSm from "../assets/niceworkonthelaunchofyourproduct_phonesmallimg_codingnotesfeedback.png"
import FGrid from "../assets/goingtogiveitatry_codingnotesfeedback.png"
import GGrid from "../assets/thisisgreatsoselfexplanatory_codingnotesfeedback.png"
import GGridSm from "../assets/thisisgreatsoselfexplanatory_sm_codingnotesfeedback.png.png"
import HGrid from "../assets/looksamazing_codingnotesfeedback.png"
import IGrid from "../assets/iloveflashcards_codingnotesfeedback.png"
import JGrid from "../assets/amazingproduct_codingnotesfeedback.png"
import KGrid from "../assets/notesgreatnarrative_generalfeedback.png"
import KGridSm from "../assets/notesgreatnarrative_sm__generalfeedback.png.png"
import LGrid from "../assets/notesnecessaryforcodingnotes_generalfeedback.png"
import LGridSm from "../assets/notesnecessaryfor_sm_codingnotes_generalfeedback.png.png"
import MGrid from "../assets/givethismanafollow_generalfeedback.png"
import NGrid from "../assets/imgivingthisashot_codingnotesfeedback.png"
import NGridSm from "../assets/imgivingthisashot_sm_codingnotesfeedback.png.png"
import OGrid from "../assets/exactylwhatthecodingcommunityneednow_codingntoesfeedback.png"
import PGrid from "../assets/iwaslookingforsomethinglikethat_codingnotesfeedback.png"
import QGrid from "../assets/notiontemplatesishugehelp_codingnotesfeedback.png"
import QGridSm from "../assets/notiontemplatesishugehelp_sm_codingnotesfeedback.png.png"
import RGrid from "../assets/itssimpleandeffective_codingnotesfeedback.png"
import RGridSm from "../assets/itssimpleandeffective_sm_codingnotesfeedback.png.png"
import SGrid from "../assets/thisiscool_codingnotesfeedback.png"
import TGrid from "../assets/supernice200customers_codingnotesandgeneralfeedback.png"
import TGridSm from "../assets/supernice200customers_sm_codingnotesandgeneralfeedback.png"
import UGrid from "../assets/nicewillcomeinhandy_codingnotesgeneralfeedback.png"

const PositiveFeedback = () => {

  


  return (
    <div>
    <div className={styles.primary}>
         <h1 className={roboto_mono.className}>
       This is what people think about my work.
         </h1>
    </div>
    

    <div className={styles.completeGrid} >
      <main className={styles.mainp}>
  <Image  className={styles.gridItem} src={AGrid}  alt="First" />
 <Image className={styles.gridItem}  src={BGrid}  alt="First" />
 <article className={styles.cgrid}><Image className={styles.gridItem}  src={CGrid}  alt="First" /></article>
 <Image className={styles.gridItem2Sm}  src={CGridSm}  alt="First" />
  <Image className={styles.gridItem}  src={FGrid}  alt="First" />
  <Image className={styles.gridItem}  src={JGrid}  alt="First" />
  <Image  className={styles.gridItem}  src={OGrid}  alt="First" />
  
</main>

     <main className={styles.main2}>
  <Image  className={styles.gridItem2} src={EGrid}  alt="First" />
  <Image  className={styles.gridItem2Sm} src={EGridSm}  alt="First" />
 <Image className={styles.gridItem2}  src={GGrid}  alt="First" />
 <Image className={styles.gridItem2Sm}  src={GGridSm}  alt="First" />
 <Image className={styles.gridItem2}  src={TGrid}  alt="First" />
 <Image className={styles.gridItem2Sm}  src={TGridSm}  alt="First" />
  <Image className={styles.gridItem2}  src={KGrid}  alt="First" />
  <Image className={styles.gridItem2Sm}  src={KGridSm}  alt="First" />
  
</main>

   <main className={styles.mainp} >
  <Image  className={styles.gridItem} src={SGrid}  alt="First" />
 <Image className={styles.gridItem}  src={MGrid}  alt="First" />
 <Image className={styles.gridItem}  src={PGrid}  alt="First" />

  
</main>


   <main className={styles.mainp} >
  <Image  className={styles.gridItem} src={IGrid}  alt="First" />
 <Image className={styles.gridItem}  src={UGrid}  alt="First" />
 <Image className={styles.gridItem}  src={HGrid}  alt="First" />

  
</main>


   <main className={styles.main2} >
  <Image  className={styles.gridItem35} src={NGrid}  alt="First" />
  <Image  className={styles.gridItem35Sm} src={NGridSm}  alt="First" />
 <Image className={styles.gridItem35}  src={RGrid}  alt="First" />
 <Image className={styles.gridItem3Sm}  src={RGridSm}  alt="First" />

  
</main>

   <main className={styles.main2}>
  <Image  className={styles.gridItem3} src={QGrid}  alt="First" />
  <Image  className={styles.gridItem3Sm} src={QGridSm}  alt="First" />
 <Image className={styles.gridItem3}  src={LGrid}  alt="First" />
 <Image className={styles.gridItem3Sm}  src={LGridSm}  alt="First" />

  
</main>






    {/*
      <div className={styles.containerOne}>
    <Image className={styles.gridItem} src={AGrid} alt="First"/>
    <Image className={styles.gridItem} src={BGrid} alt="Second"/>
    <Image className={styles.gridItemSpecial} src={CGrid} alt="Third"/>

    <Image src={AGrid}  alt="First" />

      </div>

    
      <div className={styles.containerOne}>
    <Image className={styles.gridItem2} src={EGrid} alt="First"/>
    <Image className={styles.gridItem2} src={FGrid} alt="Second"/>
    <Image className={styles.gridItem2} src={GGrid} alt="Third"/>

      </div>


      <div className={styles.containerOne}>
    <Image className={styles.gridItem2} src={NGrid} alt="First"/>
    <Image className={styles.gridItem2} src={OGrid} alt="Second"/>
    <Image className={styles.gridItem2} src={PGrid} alt="Third"/>

      </div>


      <div className={styles.containerOne}>
    <Image className={styles.gridItem2} src={QGrid} alt="First"/>
    <Image className={styles.gridItem2} src={RGrid} alt="Second"/>
    <Image className={styles.gridItemSpecial2} src={SGrid} alt="Third"/>

      </div>


      <div className={styles.containerOne}>
    <Image className={styles.gridItem3} src={HGrid} alt="First"/>
    <Image className={styles.gridItem3} src={IGrid} alt="Second"/>
    <Image className={styles.gridItem3} src={JGrid} alt="Third"/>

      </div>


      <div className={styles.containerOne}>
    <Image className={styles.gridItem4} src={KGrid} alt="First"/>
    <Image className={styles.gridItem4} src={LGrid} alt="Second"/>
    <Image className={styles.gridItem4} src={MGrid} alt="Third"/>

      </div>
  */}
   
</div>

    </div>
  )
}

export default PositiveFeedback
import Image from 'next/image'
import styles from './page.module.css'


import {FiMousePointer} from "react-icons/fi"

import {permanent_marker, roboto_mono} from "./fonts"

import Header from './header'
import AboutMeShort from './aboutme_short'
import CodingnotesShort from './codingnotes_short'
import FreelanceOSShort from './freelanceos_short'
import PaliShort from './pali_short'
import MyContent from './mycontent'
import NewsletterShort from './newsletter_short'
import WebsiteNotionTemplateOffer from './websitenotiontemplateoffer_short'
import PositiveFeedback from './positivefeedback'
import LinkstoEverything from './linkstoeverything'
import Newslettercta from './newslettercta'
import Footer from './footer'


import {FaSearch} from "react-icons/fa"



export default function Home() {
  return (
    <div>
      
     <Header />
   
    <AboutMeShort />
    <CodingnotesShort />
    <FreelanceOSShort />
    <PaliShort />
    <MyContent />
    <NewsletterShort />
    <WebsiteNotionTemplateOffer />
    <PositiveFeedback />
    <LinkstoEverything />
    <Newslettercta /> 
    <Footer />

      
      
    </div>
  )
}

import Image from 'next/image'
import styles from './page.module.css'

import Head from 'next/head'


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
          <Head>
      <title>Finn Guha</title>
      <meta name="description" content="Official homepag, portfolio and shop of Finn Guha"></meta>
      <meta name="author" content="Finn Guha"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"></meta>
  <meta name="theme-color" content="none"></meta>
  <meta name="mobile-web-app-capable" content="yes"></meta>
  <meta name="keywords" content="finn guha, codingnotes, web development , learn to code, learn to learn, learn2learn community, 
  studying, freelancing, website maker, notion templates
   "></meta>
  

      <meta
          property="og:image"
          content="/public/favicon.ico"
        />
    </Head>

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

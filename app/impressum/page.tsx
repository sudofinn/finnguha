import React from 'react'
import Link from "next/link"

import styles from "./page.module.css"
import Footer from '../footer'

const page = () => {
  return (
    <div className={styles.primary}>
      <h1> Impressum</h1>

<p>CodingNotes is a German startup. Therefore, an &quot;impressum&quot; ( imprint ) is necessary.</p>

<p>WEBSEITENBETREIBER</p>
<p>Finn Guha</p>

<p>INFORMATIONEN ÜBER DAS UNTERNEHMEN</p>
<p>Einzelunternehmer</p>

<p>Scharnhorststraße 45 Dinslaken , 46535</p>
<p>finnguha@gmail.com</p>
<p>+4915736470782</p>
<p>INFORMATIONEN ÜBER DIE UNTERNEHMENS<br/>REGISTRIERUNG</p>
<p>Informationen zur Online-Streitbeilegung: Die EU-Kommission hat eine Internetplattform zur Online-Beilegung von Streitigkeiten (sog. „OS-Plattform“) geschaffen. Die OS-Plattform dient als Anlaufstelle zur außergerichtlichen Beilegung von Streitigkeiten betreffend vertragliche Verpflichtungen, die aus Online-Kaufverträgen erwachsen. Sie können die OS-Plattform unter dem folgenden Link erreichen:
<Link href="http://ec.euopa.eu/consumers/odr " className={styles.link}>click here</Link>
  „Hinweis gemäß § 36 Verbraucherstreitbeile<br/>gungsgesetz
   (VSBG).
</p>





<Footer />
        
    </div>
  )
}

export default page
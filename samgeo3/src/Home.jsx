import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import samuelogo from './assets/samuelogo.png'
import resume from './assets/Resume (1).pdf'
import './Home.css' 

function Home() {
  return (
    <>
    <section className='homesection'>
      <div className="introdiv">
        <h1>Hi, I'm <span className='name'>Samuel George</span><br></br><span className='p'>MERN stack Developer</span></h1>
        <p>I love turning creative ideas into functional online experiences using modern web technologies</p>
        <div className="socialdiv">
           <a href="https://linkedin.com/in/samuel-george-j004"><FontAwesomeIcon className='i' icon={faLinkedinIn}/></a>
           <a href="https://github.com/samgeo12345"><FontAwesomeIcon className='i' icon={faGithub}/></a>
           <a href="https://api.whatsapp.com/send/?phone=%2B919566033767&text&type=phone_number&app_absent=0"><FontAwesomeIcon className='i' icon={faWhatsapp}/></a>
        </div>
        <a href={resume} className='button' download>Resume <FontAwesomeIcon icon={faDownload}/></a>
      </div>
      <div className="introimgdiv">
        <img src={samuelogo} alt="" />
      </div>
    </section>
    </>
  )
}

export default Home
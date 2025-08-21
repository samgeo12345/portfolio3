import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './about.css'
import aboutimg from './assets/aboutimg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

function About() {
  const [active,setActive]=useState("intro");
  return (
    <>
    <section className="aboutsectiondiv">
        <h1 className='abouthead'>About Me</h1>
        <div className="aboutdiv">
          <div className="aboutimgdiv">
          <img src={aboutimg} alt="" />
          </div>
          <div className="aboutcontentdiv">
            <div className="aboutoptiondiv">
              <button onClick={()=>setActive("intro")} className={active==="intro" ? "switchbtn" : ""}>Introduction</button>
              <button onClick={()=>setActive("education")} className={active==="education" ? "switchbtn" : ""}>Education</button>
            </div>
            {active==="intro" && (
            <div id="introcontents">
            <h1>I'm <span>Samuel George</span></h1>
            <p>I am an aspiring Full Stack Developer with skills in HTML, CSS, JavaScript, and React for the front end, and growing knowledge in backend technologies. I enjoy building complete, user-friendly web applications and working across both client and server sides. My goal is to develop efficient, scalable, and impactful digital solutions as a full stack professional.</p>
            <a href="" className="hirebtn">Hire me <FontAwesomeIcon icon={faLocationArrow}/></a>
            </div>
            )}
            {active==="education" && (
            <div id="educationcontents">
              <div className="educations" style={{marginTop:"5%"}}>
                <h3><span>SSLC Standard</span></h3>
                <p>Christuraja Matriculation Higher Secondary School</p>
                <p>Marthandam</p>
                <p>2019 - 2020</p>
              </div>
              <div className="educations">
                <h3><span>HSC Standard</span></h3>
                <p>Christuraja Matriculation Higher Secondary School</p>
                <p>Marthandam</p>
                <p>2021 - 2022</p>
              </div>
              <div className="educations">
                <h3><span>Diploma in Python</span></h3>
                <p>CADD Center Private Limited</p>
                <p>Marthandam</p>
                <p>2022 (3 months)</p>
              </div>
              <div className="educations">
                <h3><span>B.E Computer Science</span></h3>
                <p>Ponjesly College of Engineering</p>
                <p>Nagercoil</p>
                <p>2022 - 2026</p>
              </div>
            </div>
            )}
          </div>
        </div>
    </section>
    </>
  )
}

export default About
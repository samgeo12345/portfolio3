import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import portfolio from './portfolio.json'
import './about.css'
import aboutimg from './assets/aboutimg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

function About() {
  const [active,setActive]=useState("intro");

  return (
    <>
    <section className="aboutsectiondiv">
        <h2 className='abouthead'>About Me</h2>
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
            <p>I am an aspiring Full Stack Developer with skills in HTML, CSS, JavaScript, and React for the front end, and growing knowledge in backend technologies. I enjoy building complete, user-friendly web applications and working across both client and server sides.</p>
            <a href="" className="hirebtn">Hire me <FontAwesomeIcon icon={faLocationArrow}/></a>
            </div>
            )}
            {active==="education" && (
            <div id="educationcontents">
              {portfolio.education.map((edu)=>(
              <div className="educations" style={{marginTop:"5%"}}>
                <h3><span>{edu.course}</span></h3>
                <p>{edu.institution}</p>
                <p>{edu.place}</p>
                <p>{edu.year}</p>
              </div>
              ))}
            </div>
            )}
          </div>
        </div>
    </section>
    </>
  )
}

export default About
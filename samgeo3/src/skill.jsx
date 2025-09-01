import React,{useState} from 'react'
import portfolio from './portfolio.json'
import './skill.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faC, faLocationArrow, faPaintBrush } from '@fortawesome/free-solid-svg-icons'
import { faCss3, faHtml5, faJava, faJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'

function Skill() {
  const [SkillOption,setSkillOption]=useState("skills");
  const iconMap={
    html:faHtml5,
    css:faCss3,
    js:faJs,
    react:faReact,
    python:faPython,
    java:faJava,
    c:faC
  }

  return (
    <>
    <section className="skillsectiondiv">
        <h1 className='skillhead'>Skills & Experiences</h1>
        <div className="skillsetdiv">
          <div className="skillsetoptionsdiv">
            <button onClick={()=>setSkillOption("skills")} className={SkillOption==="skills" ? "skillswitch" : ""}>Skills</button>
            <button onClick={()=>setSkillOption("experiences")} className={SkillOption==="experiences" ? "skillswitch" : ""}>Experiences</button>
            <button onClick={()=>setSkillOption("certifications")} className={SkillOption==="certifications" ? "skillswitch" : ""}>Certifications</button>
          </div>
          <div className="skillexpcerdiv">
            {SkillOption==="skills" && (
              <div id="skilldiv">
                {portfolio.skill.map((skl)=>(
                <div className="skillss">
                  <h1></h1>
                  <FontAwesomeIcon className='i' style={{color:skl.color}} icon={iconMap[skl.icons]}/>
                  <span>{skl.percentage}%</span>
                  <hr style={{width:skl.percentage + "%"}} />
                </div>
                ))}
                {portfolio.skillimg.map((sklimg)=>(
                <div className="skillss">
                  <h1></h1>
                  <img className='gimpimg' src={sklimg.img} alt="" />
                  <span>{sklimg.percentage}%</span>
                  <hr style={{width:sklimg.percentage + "%"}} />
                </div>
                ))}
              </div>
            )}
            {SkillOption==="experiences" && (
              <div id="experiencediv">
                {portfolio.experience.map((exp)=>(
                <div className="srisclickdiv">
                  <div className="srisclickimgdiv">
                    <img src={exp.image} alt={exp.company} />
                  </div>
                  <div className="srisclickcontentdiv">
                    <h1><span>{exp.intern}</span> - {exp.company}</h1>
                    <p>{exp.date}</p>
                    <span className='place'>{exp.venue}</span><br />
                    <a href={exp.page}><FontAwesomeIcon className='visiticon' icon={faArrowUpRightFromSquare}/> <span>visit</span></a>
                  </div>
                </div>
                ))}
              </div>
            )}
            {SkillOption==="certifications" && (
              <div id="certificationdiv">
                {portfolio.certification.map((cert)=>(
                <div className="certificate">
                  <div className="certimgdiv">
                    <img src={cert.certificate} alt="" />
                  </div>
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

export default Skill
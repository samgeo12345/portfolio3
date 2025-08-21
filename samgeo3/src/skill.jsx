import React,{useState} from 'react'
import './skill.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faC, faLocationArrow, faPaintBrush } from '@fortawesome/free-solid-svg-icons'
import { faCss3, faHtml5, faJava, faJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'

function Skill() {
  const [SkillOption,setSkillOption]=useState("skills");

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
                <div className="skillss">
                  <FontAwesomeIcon className='i' icon={faHtml5}/>
                  HTML5
                  <hr className='hr-htmlbar' />
                </div>
                <div className="skillss">
                  <FontAwesomeIcon className='i' icon={faCss3}/>
                  CSS3
                  <hr className='hr-cssbar' />
                </div>
                <div className="skillss">
                  <FontAwesomeIcon className='i' icon={faJs}/>
                  JavaScript
                  <hr className='hr-jsbar' />
                </div>
                <div className="skillss">
                  <FontAwesomeIcon className='i' icon={faReact}/>
                  ReactJS
                  <hr className='hr-reactbar' />
                </div>
                <div className="skillss">
                  <FontAwesomeIcon className='i' icon={faPaintBrush}/>
                  GIMP
                  <hr className='hr-gimpbar' />
                </div>
                <div className="skillss">
                  <FontAwesomeIcon className='i' icon={faPython}/>
                  Python
                  <hr className='hr-pythonbar' />
                </div>
                <div className="skillss">
                  <FontAwesomeIcon className='i' icon={faC}/>
                  C
                  <hr className='hr-cbar' />
                </div>
                <div className="skillss">
                  <FontAwesomeIcon className='i' icon={faJava}/>
                  Java
                  <hr className='hr-javabar' />
                </div>
              </div>
            )}
            {SkillOption==="experiences" && (
              <div id="experiencediv">
                <h1>experience</h1>
              </div>
            )}
            {SkillOption==="certifications" && (
              <div id="certificationdiv">
                <h1>certification</h1>
              </div>
            )}
          </div>
        </div>
    </section>
    </>
  )
}

export default Skill
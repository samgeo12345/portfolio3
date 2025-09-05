import React, { useState } from 'react'
import './project.css'
import portfolio from './portfolio.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-brands-svg-icons'

function Project() {
  const[prodetail,setProdetail]=useState("");

  return (
    <section className="projectsecdiv">
        <h1 className='projecthead'>Projects made</h1>
        <div className="projectdiv">
            <div className="projectholddiv">
            {portfolio.projects.map((pro)=>(
            <div className="projects">
                <img src={pro.proimage} alt=""/>
                <div className="projectdetails">
                    <p>{pro.prodetails}</p>
                    <a href={pro.link}><FontAwesomeIcon className='i' icon={faArrowUpRightFromSquare}/></a>
                </div>
            </div>
            ))}
            </div>
        </div>
    </section>
  )
}

export default Project
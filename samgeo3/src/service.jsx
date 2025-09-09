import React from 'react'
import portfolio from './portfolio.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartPie, faCode, faPalette, faPencil } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-brands-svg-icons'
import './service.css'

function Service() {
  const iconMap={
    chart:faChartPie,
    code:faCode,
    palette:faPalette,
    pencil:faPencil
  }

  return (
    <section className="servicesectiondiv">
        <h2 className="servicehead">Services Available</h2>
        <div className="servicediv">
          {portfolio.services.map((ser)=>(
          <div className="servicesetdiv">
          <div className="services">
            <div>
            <h2><FontAwesomeIcon className='i' icon={iconMap[ser.icons]}/> <span>{ser.servicename}</span></h2>
            </div>
            <div>
            <p>{ser.description}</p>
            </div>
          </div>
          </div>
          ))}
        </div>
    </section>
  )
}

export default Service
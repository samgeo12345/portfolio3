import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight, faEnvelope, faLandmark, faLocation, faLocationDot, faPaperPlane, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-brands-svg-icons'
import './contact.css'

function Contact() {
  return (
    <section className="contactsecdiv">
        <h2 className="contacthead">Contact Details</h2>
        <div className="contactdiv">
          <div className="contactdetaildiv">
            <div className="conname">
              <h3>Samuel George J</h3>
            </div>
              <div className="email">
                <p>samgeoj12d@gmail.com <button><FontAwesomeIcon icon={faEnvelope}/></button></p>
              </div>
              <div className="phoneno">
                <p>+91 9566033767 <button><FontAwesomeIcon icon={faPhone}/></button></p>
              </div>
              <div className="address">
                <p>India,TamilNadu,K.K.Dist <button><FontAwesomeIcon icon={faLocationDot}/></button></p>
              </div>
          </div>
          <div className="messagediv">
            <form action="">
              <div className="messageform">
                <input type="text" placeholder='Name' required/>
                <input type="email" placeholder='Email' required/>
                <textarea rows={5} name="" id="" placeholder='Your message' required></textarea>
                <button type='submit'>Send message <FontAwesomeIcon icon={faPaperPlane}/></button>
              </div>
            </form>
          </div>
        </div>
    </section>
  )
}

export default Contact
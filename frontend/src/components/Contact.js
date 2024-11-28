import React from 'react'
import ContactForm from './ContactForm'
import Stack from './Stack'

const Contact = () => {
  return (
    <div className='contact section-center' id='contact'>
      <div className='contact-container'>
        <article className='contact-details'>
          <h3>Offered</h3>
          <h2>Services</h2>
          <div className='contact-offer'>
            <h3>
              <span>Front-End Development :</span>Creating responsive and
              engaging user interfaces using React, TypeScript, and modern web
              technologies. Specializing in building dynamic, user-centered web
              applications.
            </h3>
          </div>
          <div className='contact-offer'>
            <h3>
              <span>Website Design and Development:</span>Designing and
              developing custom websites with a focus on clean, professional
              aesthetics and optimal performance.
            </h3>
          </div>
          <div className='contact-offer'>
            <h3>
              <span>E-Commerce Solutions: </span>Building and integrating
              e-commerce platforms with features such as product management,
              shopping cart functionality, and payment processing.
            </h3>
          </div>
          <div className='contact-offer'>
            <h3>
              <span>Consultation and Code Review: </span>Providing expert advice
              on web development practices, reviewing code for optimization, and
              offering solutions to improve project efficiency.
            </h3>
          </div>
        </article>
        <article className='two-details'>
         <ContactForm/>
         <Stack/>
        </article>
      </div>
    </div>
  )
}

export default Contact

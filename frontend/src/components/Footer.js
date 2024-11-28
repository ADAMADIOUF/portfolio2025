import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container section-center'>
        {/* Projects Column */}
        <div className='footer-column'>
          <h3>Projects</h3>
          <ul>
            <li>Blog Website</li>
            <li>Real Estate Website</li>
            <li>E-commerce Storefront</li>
            <li>Task Management Dashboard</li>
          </ul>
        </div>
        {/* Services Column */}
        <div className='footer-column'>
          <h3>Services</h3>
          <ul>
            <li>Front-End Development</li>
            <li>Website Design & Development</li>
            <li>E-commerce Solutions</li>
            <li>Consultation & Code Review</li>
          </ul>
        </div>
        {/* Contact Column */}
        <div className='footer-column'>
          <h3>Contact</h3>
          <ul>
            <li>Minot, North Dakota</li>
            <li>
              <a href='mailto:adamadiouf2017@gmail.com'>
                adamadiouf2017@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright and Social Icons */}
      <div className='footer-bottom'>
        <p>© 2024 Adama Diouf. All rights reserved.</p>
        <div className='social-icons'>
          <a
            href='https://github.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </a>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin />
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter />
          </a>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

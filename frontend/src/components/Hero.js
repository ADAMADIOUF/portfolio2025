import React from 'react'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll' // Import ScrollLink for smooth scrolling
import a from '../assets/profile.png'
import heroImage from '../assets/hero.png'

const Hero = () => {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  }

  return (
    <div className='hero' id='home'>
      <div className='hero-first-image'>
        <motion.img
          src={heroImage}
          alt='Hero'
          initial='hidden'
          animate='visible'
          variants={imageVariants}
        />
      </div>
      <div className='hero-container'>
        <motion.h3 initial='hidden' animate='visible' variants={container}>
          <h3>Hi,</h3>
          <h1> I’m Adama Diouf, </h1>
          <h2>
            <span className='span'>a</span>{' '}
            <span>Junior MERN Stack Developer</span>.
          </h2>
        </motion.h3>
        <motion.p initial='hidden' animate='visible' variants={container}>
          Crafting Beautiful and Functional Web Experiences with React,
          TypeScript, MongoDB, Express, and Node.js.
        </motion.p>

        <div className='btn-hero-container'>
          {/* ScrollLink for smooth scrolling to projects */}
          <motion.button
            className='btn-hero-work'
            variants={buttonVariants}
            whileHover='hover'
          >
            <ScrollLink
              to='projects' // The section ID to scroll to
              smooth={true} // Enable smooth scrolling
              duration={500} // Duration of the scroll
              offset={-80} // Adjust if you have a fixed navbar
            >
              View My Work
            </ScrollLink>
          </motion.button>

          {/* ScrollLink for smooth scrolling to contact */}
          <motion.button
            className='btn-hero-hired'
            variants={buttonVariants}
            whileHover='hover'
          >
            <ScrollLink
              to='contact' 
              smooth={true} 
              duration={500} 
              offset={-80} 
            >
              Hire Me
            </ScrollLink>
          </motion.button>
        </div>
      </div>
      <div className='hero-profile'>
        <motion.img
          src={a}
          alt='Profile'
          initial='hidden'
          animate='visible'
          variants={imageVariants}
        />
      </div>
    </div>
  )
}

export default Hero

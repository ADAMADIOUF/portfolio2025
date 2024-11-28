import React from 'react'
import a from '../assets/js.png'
import b from '../assets/ts.png'
import { Link as ScrollLink } from 'react-scroll'
import { motion } from 'framer-motion' 

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='section-center'>
       
        <div className='title-about'>
          <h3>Develop, Implement, Reliable & Innovate.</h3>
        </div>

        
        <motion.div
          className='about-first-text'
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 1 }} 
          viewport={{ once: true }} 
        >
          <p>
            I'm Adama Diouf, a dedicated React Developer & Front-End Developer
            with 3 years of experience, specializing in crafting responsive and
            user-friendly web applications. My journey into development began in
            2020 with a passion for creating visually appealing websites,
            leading me to continuously refine my skills and stay updated on
            industry trends. Proficient in HTML, CSS, JavaScript, and frameworks
            like React, Redux, Tailwind CSS, and Next.js, I take pride in
            turning concepts into reality with clean and efficient code.
          </p>
        </motion.div>

        
        <motion.div
          className='about-second-text'
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 1 }} 
          viewport={{ once: true }} 
        >
          <p>
            Having played a pivotal role in successful project deliveries
            through collaboration with cross-functional teams, I thrive on
            creating exceptional user experiences. My engineering studies, which
            commenced in March 2020, reflect my commitment to continuous
            learning and improvement. Embracing the philosophy of learning by
            doing, I consistently work hard to exceed expectations. As a
            creative developer, I am passionate about pushing the boundaries of
            what's possible in web development.
          </p>
        </motion.div>

        
        <ScrollLink to='contact' smooth={true} duration={500} offset={-80}>
          <motion.button
            className='btn-hero-hired'
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            My Skills
          </motion.button>
        </ScrollLink>
      </div>

      
      <motion.div
        className='first-image'
        initial={{ opacity: 0, x: -100 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src={a} alt='JavaScript' />
      </motion.div>

      <motion.div
        className='second-image'
        initial={{ opacity: 0, x: 100 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src={b} alt='TypeScript' />
      </motion.div>
    </div>
  )
}

export default About

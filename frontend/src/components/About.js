import React from 'react'
import a from '../assets/js.png' // JavaScript image
import b from '../assets/ts.png' // TypeScript image

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='section-center'>
        <div className='title-about'>
          <h3>Develop, Implement, Reliable & Innovate.</h3>
        </div>
        <div className='about-first-text'>
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
        </div>
        <div className='about-second-text'>
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
        </div>
        <button className='btn-hero-hired'>Read More</button>
      </div>
      <div className='first-image'>
        <img src={a} alt='JavaScript' />
      </div>
      <div className='second-image'>
        <img src={b} alt='TypeScript' />
      </div>
    </div>
  )
}

export default About

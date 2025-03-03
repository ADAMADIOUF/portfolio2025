import React from 'react'
import leftImage from '../assets/skills.png'
import rightImage from '../assets/skills2.png'
import p from '../assets/profile.png'
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaNode,
  FaRedoAlt,
  FaServer,
} from 'react-icons/fa'

import { motion } from 'framer-motion' // Import motion from Framer Motion

const Skills = () => {
  return (
    <div className='skills' id='skills'>
      <div className='section-center'>
        <div className='skills-details'>
          <div className='skills-container'>
            <motion.div
              className='column'
              initial={{ opacity: 0, y: 50 }} // Bottom
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>
                <span>
                  <FaReact />
                </span>{' '}
                React Development
              </h3>
            </motion.div>
            <motion.div
              className='column'
              initial={{ opacity: 0, y: 50 }} // Bottom
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>
                <span>
                  <FaCss3Alt />
                </span>{' '}
                Responsive Design
              </h3>
            </motion.div>
            <motion.div
              className='column'
              initial={{ opacity: 0, y: 50 }} // Bottom
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>
                <span>
                  <FaHtml5 />
                </span>{' '}
                Web Development
              </h3>
            </motion.div>
            <motion.div
              className='column'
              initial={{ opacity: 0, y: 50 }} // Bottom
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>
                <span>
                  <FaReact />
                </span>{' '}
                React.js
              </h3>
            </motion.div>
            <motion.div
              className='column'
              initial={{ opacity: 0, y: 50 }} // Bottom
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>
                <span>
                  <FaNodeJs />
                </span>{' '}
                Node.js
              </h3>
            </motion.div>
            <motion.div
              className='column'
              initial={{ opacity: 0, y: 50 }} // Bottom
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>
                <span>
                  <FaRedoAlt />
                </span>{' '}
                Redux
              </h3>
            </motion.div>
            <motion.div
              className='column'
              initial={{ opacity: 0, y: 50 }} // Bottom
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>
                <span>
                  <FaServer />
                </span>{' '}
                Express.js
              </h3>
            </motion.div>
          </div>
          <div className='skill-profile'>
            <motion.img
              src={p}
              alt=''
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            />
            <motion.div
              className='skills-years'
              initial={{ opacity: 0, y: -50 }} // Top
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>
                3 Years of <span>Experience</span>
              </h3>
              <p>in building scalable and high-performance web applications.</p>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        className='first-img-skills'
        initial={{ opacity: 0, y: -100 }} // Top
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <img src={leftImage} alt='' />
      </motion.div>
      <motion.div
        className='second-img-skills'
        initial={{ opacity: 0, y: 100 }} // Bottom
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <img src={rightImage} alt='' />
      </motion.div>
    </div>
  )
}

export default Skills

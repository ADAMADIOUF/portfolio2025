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

const Skills = () => {
  return (
    <div className='skills'>
      <div className='section-center'>
        <div className='skills-details'>
          <div className='skills-container'>
            <div className='column'>
              <h3>
                <span>
                  <FaReact />
                </span>{' '}
                React Development
              </h3>
            </div>
            <div className='column'>
              <h3>
                <span>
                  <FaCss3Alt />
                </span>{' '}
                Responsive Design
              </h3>
            </div>
            <div className='column'>
              <h3>
                <span>
                  <FaHtml5 />
                </span>{' '}
                Web Development
              </h3>
            </div>
            <div className='column'>
              <h3>
                <span>
                  <FaReact />
                </span>{' '}
                React.js
              </h3>
            </div>
            <div className='column'>
              <h3>
                <span>
                  <FaNodeJs />
                </span>{' '}
                Node.js
              </h3>
            </div>
            <div className='column'>
              <h3>
                <span>
                  <FaRedoAlt />
                </span>{' '}
                Redux
              </h3>
            </div>
            <div className='column'>
              <h3>
                <span>
                  <FaServer />
                </span>{' '}
                Express.js
              </h3>
            </div>
          </div>
          <div className='skill-profile'>
            <img src={p} alt='' />
            <div className='skills-years'>
              <h3>
                3 Years of <span>Experience</span>
              </h3>
              <p>in building scalable and high-performance web applications.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='first-img-skills'>
        <img src={leftImage} alt='' />
      </div>
      <div className='second-img-skills'>
        <img src={rightImage} alt='' />
      </div>
    </div>
  )
}

export default Skills

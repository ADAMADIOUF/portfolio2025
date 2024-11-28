import React from 'react'
import p from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'

import { FaArrowRight, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion' 

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <div className='section-center'>
        <div className='projrect-title'>
          <h3>Featured Projects</h3>
        </div>
        <div className='container-projects'>
          {/* Project 1 */}
          <motion.article
            className='projects-img'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img src={p} alt='' />
          </motion.article>

          <motion.article
            className='projects-info'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3>Blog Website</h3>
            <p>MERN Stack Developer</p>
            <div className='projects-languages'>
              <span>React.js</span>
              <span>CSS</span>
              <span>Redux Toolkit</span>
              <span>MongoDB</span>
              <span>Express.js</span>
            </div>
            <div className='project-details'>
              <p>
                A modern blog platform where users can create, edit, and publish
                blog posts. Built with the MERN stack (MongoDB, Express.js,
                React.js, Node.js), this project demonstrates proficiency in
                full-stack development, handling both the front-end and
                back-end. It features dynamic data handling, user
                authentication, and API integration, ensuring seamless
                performance and scalability.
              </p>
            </div>
            <div className='projects-buttons'>
              <button className='view-project-btn'>
                View Project <FaArrowRight />
              </button>
              <button className='github-btn'>
                <a
                  href='https://github.com/your-repo-link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View on GitHub <FaGithub />
                </a>
              </button>
            </div>
          </motion.article>

          {/* Project 2 */}
          <motion.article
            className='projects-info'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3>Real Estate Website</h3>
            <p>MERN Stack Developer</p>
            <div className='projects-languages'>
              <span>React.js</span>
              <span>Redux</span>
              <span>Tailwind CSS</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Express.js</span>
            </div>
            <div className='project-details'>
              <p>
                A responsive real estate website designed to showcase property
                listings, complete with search and filtering functionalities.
                Developed using React, Redux, and Tailwind CSS, this project
                highlights the ability to create interactive and user-friendly
                interfaces that handle complex data.
              </p>
            </div>
            <div className='projects-buttons'>
              <button className='view-project-btn'>
                View Project <FaArrowRight />
              </button>
              <button className='github-btn'>
                <a
                  href='https://github.com/your-repo-link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View on GitHub <FaGithub />
                </a>
              </button>
            </div>
          </motion.article>

          <motion.article
            className='projects-img'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img src={p2} alt='' />
          </motion.article>
          <motion.article
            className='projects-img'
            initial={{ opacity: 0, x: -100 }} // Start off-screen
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img src={p3} alt='' />
          </motion.article>

          {/* Project 3 */}
          <motion.article
            className='projects-info'
            initial={{ opacity: 0, x: -100 }} // Start off-screen
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3>E-commerce Storefront</h3>
            <p>MERN Stack Developer</p>
            <div className='projects-languages'>
              <span>React.js</span>
              <span>CSS</span>
              <span>Redux Toolkit</span>
              <span>MongoDB</span>
              <span>Express.js</span>
              <span>Stripe</span>
              <span>Admin Dashboard</span>
              <span>User Dashboard</span>
            </div>
            <div className='project-details'>
              <p>
                A dynamic e-commerce website created with the MERN stack
                (MongoDB, Express.js, React.js, Node.js) and Tailwind CSS. This
                project includes features like product listings, a shopping
                cart, and a checkout system, showcasing skills in full-stack
                development, dynamic data handling, and responsive design.
              </p>
            </div>
            <div className='projects-buttons'>
              <button className='view-project-btn'>
                View Project <FaArrowRight />
              </button>
              <button className='github-btn'>
                <a
                  href='https://github.com/your-repo-link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View on GitHub <FaGithub />
                </a>
              </button>
            </div>
          </motion.article>

          {/* Project 4 */}
          <motion.article
            className='projects-info'
            initial={{ opacity: 0, x: -100 }} // Start off-screen
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3>Task Management Dashboard</h3>
            <p>MERN Stack Developer</p>
            <div className='projects-languages'>
              <span>React.js</span>
              <span>Redux</span>
              <span>CSS</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Express.js</span>
            </div>
            <div className='project-details'>
              <p>
                A task management application built with React and Redux,
                allowing users to create, edit, and manage tasks efficiently.
                This dashboard demonstrates expertise in state management,
                component-based architecture, and creating intuitive user
                experiences.
              </p>
            </div>
            <div className='projects-buttons'>
              <button className='view-project-btn'>
                View Project <FaArrowRight />
              </button>
              <button className='github-btn'>
                <a
                  href='https://github.com/your-repo-link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View on GitHub <FaGithub />
                </a>
              </button>
            </div>
          </motion.article>

          <motion.article
            className='projects-img'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img src={p4} alt='' />
          </motion.article>
        </div>
      </div>
    </div>
  )
}

export default Projects

import React from 'react'
import p from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png' 
import p6 from '../assets/p6.png'
import p7 from '../assets/p7.jpg'  
import { FaArrowRight, FaGithub, FaGlobe } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='container-projects'>
      <div className='projects' id='projects'>
        <div className='section-center'>
          <div className='projrect-title'>
            <h3>Featured Projects</h3>
          </div>
          <motion.article
            className='projects-img'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img src={p7} alt='El Reparo Mexican' />
          </motion.article>

          <motion.article
            className='projects-info'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3>Restaurant Website - El Reparo Mexican</h3>
            <p>Mern Stack Developer</p>
            <div className='projects-languages'>
              <span>React.js</span>
              <span> CSS</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
            </div>
            <div className='project-details'>
              <p>
                A modern and visually appealing website for El Reparo Mexican,
                offering an engaging online presence for the restaurant. Built
                with React.js and CSS, the site provides an intuitive menu
                browsing experience, online reservations, and contact
                information. The backend, powered by Node.js and MongoDB,
                ensures smooth order processing and efficient customer
                interactions.
              </p>
            </div>
            <div className='projects-buttons'>
              <button className='view-project-btn'>
                <a
                  href='https://elreparo.onrender.com/' // Replace with the actual project link
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Project <FaGlobe />
                </a>
              </button>
              <button className='github-btn'>
                <a
                  href='https://github.com/ADAMADIOUF/elreparo' // Replace with the actual GitHub repo link
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
            <img src={p6} alt='' />
          </motion.article>

          <motion.article
            className='projects-info'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3>Poultry Website - Mame Doussou Camara</h3>
            <p>React.js & CSS Developer</p>
            <div className='projects-languages'>
              <span>React.js</span>
              <span>CSS</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
            </div>
            <div className='project-details'>
              <p>
                A dynamic poultry website designed for Mame Doussou Camara,
                allowing customers to explore and purchase poultry products
                online. Built with React.js, Tailwind CSS, and Node.js, the
                website offers a modern and user-friendly interface. Features
                include a product catalog, real-time inventory updates, and a
                secure payment system for online orders. The project aims to
                provide a smooth shopping experience for poultry enthusiasts and
                support efficient business operations.
              </p>
            </div>
            <div className='projects-buttons'>
              <button className='view-project-btn'>
                <a
                  href='https://www.mamedoussoucamara.com/' // Replace with the actual project link
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Project <FaGlobe />
                </a>
              </button>
              <button className='github-btn'>
                <a
                  href='https://github.com/ADAMADIOUF/mamedoussoucamara' // Replace with the actual GitHub repo link
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View on GitHub <FaGithub />
                </a>
              </button>
            </div>
          </motion.article>
          {/* Project 1 */}
          <motion.article
            viewport={{ once: true }}
            className='projects-img'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
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
                <a
                  href='https://inspiredev.onrender.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Project <FaGlobe />
                </a>
              </button>
              <button className='github-btn'>
                <a
                  href='https://github.com/ADAMADIOUF/inspiredev'
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
                <a
                  href='https://www.keurexpress.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Project <FaGlobe />
                </a>
              </button>
              <button className='github-btn'>
                <a
                  href='https://github.com/ADAMADIOUF/keurExpress'
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

          {/* Project 5 (Dieuf Dieul Couture) */}
          <motion.article
            className='projects-info'
            initial={{ opacity: 0, x: -100 }} // Start off-screen
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3>Dieuf Dieul Couture</h3>
            <p>E-commerce Fashion Store</p>
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
                Dieuf Dieul Couture is a modern e-commerce platform offering
                fashion products online. This project features product listings,
                filtering, and a smooth checkout process. It was built using
                React, Redux, and Tailwind CSS, ensuring a responsive and
                visually appealing interface for a seamless shopping experience.
              </p>
            </div>
            <div className='projects-buttons'>
              <button className='view-project-btn'>
                <a
                  href='https://dieufdieulcouture2025.onrender.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Project <FaGlobe />
                </a>
              </button>
              <button className='github-btn'>
                <a
                  href='https://github.com/ADAMADIOUF/dieufdieulcouture2025'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View on GitHub <FaGithub />
                </a>
              </button>
            </div>
          </motion.article>

          {/* Additional Projects */}
          <motion.article
            className='projects-img'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img src={p5} alt='' />
          </motion.article>
        </div>
      </div>
    </div>
  )
}

export default Projects

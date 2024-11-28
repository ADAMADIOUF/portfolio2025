import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { links } from '../data'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/logo.png' // Updated variable name for consistency
import heroImage from '../assets/hero.png' // Updated variable name for consistency

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  const handleItemClick = () => {
    setMenuOpen(false)
  }

  const navbarHeight = 80

  return (
    <nav className='navbar'>
      <div className='nav-header'>
        <div className='menu-icon' onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {links.map((link) => {
            const { id, href, text } = link
            return (
              <li key={id} className='nav-item'>
                <Link
                  activeClass='active'
                  to={href}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight}
                  onClick={handleItemClick}
                >
                  {text}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className='image-wrapper'>
          <img src={logo} alt='Logo' className='image' />
          <h6 className='btn-nav'>Get in Touch</h6>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar

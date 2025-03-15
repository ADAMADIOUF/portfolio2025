import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { links } from '../data'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/logo.png'
import { Link as ScrollLink } from 'react-scroll'
import LanguageSwitcher from './LanguageSwitcher'

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
          {/* Add "Services" link */}
          <li className='nav-item'>
            <Link
              activeClass='active'
              to='services'
              spy={true}
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              onClick={handleItemClick}
            >
              Services
            </Link>
          </li>
        </ul>

        <div className='image-wrapper'>
          <ScrollLink
            to='contact'
            smooth={true}
            duration={500} // Adjust the duration for smoothness
          >
            <img src={logo} alt='Logo' className='image' />
            <h6 className='btn-nav'>Get in Touch</h6>
          </ScrollLink>
        </div>
      </div>
      <LanguageSwitcher />
    </nav>
  )
}

export default Navbar
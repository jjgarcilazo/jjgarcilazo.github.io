import React from 'react'
import logo from "../assets/images/jesse.png"
import { Link } from 'react-scroll'
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-dark '>
      <div className='container'>
        <Link
          smooth={true}
          to='home'
          // offset={-110}
          className='nav-link'
        >
          <img className="mx-auto d-block" src={logo} alt='logo...' />
        </Link>
        
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <Link smooth={true} to='home' className='nav-link'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link smooth={true} to='about' offset={-110} className='nav-link'>
                about me
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                smooth={true}
                to='skills'
                offset={-110}
                className='nav-link'
              >
                skills
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                smooth={true}
                to='experience'
                offset={-110}
                className='nav-link'
              >
                experience
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                smooth={true}
                to='portfolio'
                offset={-110}
                className='nav-link'
              >
                portfolio
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                smooth={true}
                to='contact'
                offset={-110}
                className='nav-link'
              >
                contact me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
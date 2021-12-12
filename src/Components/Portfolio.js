// FIXME: uupdate picture links
import React from 'react'
import p72 from '../assets/images/p72.png'
import Nucamp from '../assets/images/Nucamp.png'
import tarjeta from '../assets/images/tarjeta.png'
import plan from '../assets/images/Contact.png'
import portfolio from '../assets/images/portfolio.png'
import '../css/Portfolio.css'
// Fontawesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
// React Popupbox
import { PopupboxManager, PopupboxContainer } from 'react-popupbox'
import 'react-popupbox/dist/react-popupbox.css'

// FIXME: update portfolio projects
const Portfolio = () => {
 
      

  //  Project 72
  const openPopupboxp72 = () => {
    const content = (
      <>
        <img
          className='p72'
          src={p72}
          alt='Project 72'
          
        />
        <p>
          Fully Functional Monetized Japan Travel Blog 
          Live Data Flight Search
          Live Data Hotel Search 
          Get Paid for Purchased Items via Affiliate Links
          Built using HTML, Bootstrap 4
        </p>
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open(
              'https://jjgarcilazo.github.io/portfolio-v1/'
            )
          }
        >
          Link to demo
        </a>
        <br />
        <a
          href='/'
          className='hyper-link'
          onClick={() => window.open('https://github.com/jjgarcilazo/portfolio-v1')}
        >
          Github Code
        </a>
      </>
    )
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Bootstrap | Project 72'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    })
  }//  Portfolio Website
  const openPopupboxpportfolio = () => {
    const content = (
      <>
        <img
          className='portfolio'
          src={portfolio}
          alt='Portfolio'
          
        />
        <p>
        A site created using react 
        that showcases various projects I created or assisted on, 
        and also has my resume and contact information.
        Built with Reast / Bootstrap
        </p>
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open(
              'https://jjgarcilazo.github.io/'
            )
          }
        >
          Link to demo
        </a>
        <br />
        <a
          href='/'
          className='hyper-link'
          onClick={() => window.open('https://github.com/jjgarcilazo/jjgarcilazo.github.io')}
        >
          Github Code
        </a>
      </>
    )
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'React | Portfolio Website'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    })
  }
  // Flashcard app
  const openPopupboxflashcard = () => {
    const content = (
      <>
        <img
          className='tarjeta'
          src={tarjeta}
          alt='Flash card app'
          
        />
        <p>
        This is a Flash Card Style Quiz App Built in React, 
        and is part a practice project from Codecademy's Front End Engineer Course. 
        Users will be able to create their own topics, quizzes for those topics, and flashcards for those quizzes.
        Users will also be able to interact with their quizzes by flipping flashcards over.


        </p>
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open(
              'https://jjgarcilazo.github.io/flashcards-react/'
            )
          }
        >
          Link to demo
        </a>
        <br />
        <a
          href='/'
          className='hyper-link'
          onClick={() => window.open('https://github.com/jjgarcilazo/flashcards-react')}
        >
          Github Code
        </a>
      </>
    )
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'React | Flashcard App'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    })
  }
  // Appointment app
  const openPopupboxplan = () => {
    const content = (
      <>
        <img
          className='contacts'
          src={plan}
          alt='appointment planner'
          
        />
        <p>
        This is a small React Application for managing contacts and appointments.



        </p>
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open(
              'https://jjgarcilazo.github.io/appointment-planner/'
            )
          }
        >
          Link to demo
        </a>
        <br />
        <a
          href='/'
          className='hyper-link'
          onClick={() => window.open('https://github.com/jjgarcilazo/appointment-planner')}
        >
          Github Code
        </a>
      </>
    )
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'React | Appointment Planner'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    })
  }
  //Nucamp Site React
  const openPopupboxNucamp = () => {
    const content = (
      <>
        <img
          className='Nucamp'
          src={Nucamp}
          alt='nucamp-react'
          
        />
        <p>
        Not a production app. Course project in conjunction with Nucamp full stack bootcamp 
        to learn fundamentals of Front-End app making.
        Website app for a fictional camping/campsite company.
        Built using ReactJS, Redux, React-Router, Bootstrap/Reactstrap
        </p>
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open(
              ' https://jjgarcilazo.github.io/react-nucampsite/'
            )
          }
        >
          Link to demo
        </a>
        <br />
        <a
          href='/'
          className='hyper-link'
          onClick={() => window.open('https://github.com/jjgarcilazo/react-nucampsite')}
        >
          Github Code
        </a>
      </>
    )
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'React/Redux | Nucamp'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    })
  }

  

  return (
    <div id='portfolio' className='portfolio-wrapper'>
      <div className='container'>
        <h1 className='text-uppercase text-center py-5'>portfolio</h1>
        <div className='image-box-wrapper row justify-content-center'>
          <div
            className='portfolio-image-box'
            onClick={openPopupboxp72}
          >
            <img
              src={p72}
              alt='p72'
              className='portfolio-image'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className='portfolio-image-box'
            onClick={openPopupboxNucamp}
          >
            <img
              src={Nucamp}
              alt='nucamp'
              className='portfolio-image'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>          
         
          {/* - */}
          <div
            className='portfolio-image-box'
            onClick={openPopupboxflashcard}
          >
            <img
              src={tarjeta}
              alt='Flashc'
              className='portfolio-image'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div> 
          
          {/* - */}
          <div
            className='portfolio-image-box'
            onClick={openPopupboxplan}

          >
            <img
              src={plan}
              alt='Contacts'
              className='portfolio-image'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>      
          {/* - */}
          <div
            className='portfolio-image-box'
            onClick={openPopupboxpportfolio}

          >
            <img
              src={portfolio}
              alt='portfolio'
              className='portfolio-image'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>              
          
            
        </div>
      </div>
      <PopupboxContainer />
    </div>
  )
}

export default Portfolio
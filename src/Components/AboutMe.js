import React from 'react'
import dez from '../assets/images/22.jpeg'
import '../css/AboutMe.css'

const AboutMe = () => {
  return (
    <div id='about' className='container py-5'>
      <div className='row'>
        <div className='col-lg-6 col-xs-12'>
          <div className='photo-wrap mb-5'>
            <img className='profile-img' src={dez} alt='Jesse Garcilazo' />
          </div>
        </div>
        <div className='col-lg-6 col-xs-12'>
          <h1 className='about-heading'>about me</h1>
          <p>
            Hello, I am a Full Stack Software Engineer seeking a new challenge in
            web development. I love to create and think outside the box when it
            comes to designing web sites. With a little over 3 years of experience in
            the industry, I have worked with a vast array of technologies
            including: React, Javascript, Java, Mongo DB, Ruby, AngularJS,
            Bootstrap and various other languages and applications including understanding of Cloud deployments Via AWS or Google.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
import React from 'react'
import profilepic from './Assets/john-doe-image.png'
import {AiFillStar} from 'react-icons/ai'

const Testmonial = () => {
  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <p className='primary-subheading'>Testimonial</p>
        <h1 className='primary-heading'>What Our Customers Say</h1>
        <p className='primary-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at est id enim facilisis tincidunt.
        </p>
      </div>
      <div className='testimonial-section-bottom'>
        <img src={profilepic} alt="John Doe" />
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at est id enim facilisis tincidunt.</p>
        <div className='testimonials-stars-container'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
     
      </div>
      </div>
  )
}

export default Testmonial

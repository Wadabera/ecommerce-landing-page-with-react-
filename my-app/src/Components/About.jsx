import React from 'react'
import AboutBackgroundImage from './Assets/about-background-image.png'
import AboutBackground from './Assets/about-background.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'


const About = () => {
  return (
    <div className='about-section-container'>
      <div className='about-background-image-container'>
        <img src={AboutBackground} alt="About Background" />

      </div>
      <div className='about-section-image-container'>
        <img src={AboutBackgroundImage} alt="About" />
      </div>
      <div className='about-section-text-container'>
        <p className='primary-subheading'>
          About
        </p>
        <h1 className='primary-heading'>food is an important part of the  balance diet</h1>
        <p className='primary-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at est id enim facilisis tincidunt. Sed euismod, nisl vel consectetur interdum, nisl nisi aliquet nunc, eget aliquam nisl nisi euismod nisi.</p>
        <p className='primary-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at est id enim facilisis tincidunt. Sed euismod, nisl vel 
        </p>
        <div className='about-buttons-container'>
          <button className='secondary-button'>
            Learn More
          </button>
          <button className='watch-video-button'>
            <BsFillPlayCircleFill />
          watch video</button>
        </div>

      </div>
      
      
    </div>
  )
}

export default About

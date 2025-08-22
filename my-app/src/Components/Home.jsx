import React from 'react'
import Navbar from './Navbar'
import BannerBackground from './Assets/home-banner-background.png'
import { BsFileArrowRight, FiArrowDownRight } from 'react-icons/fi'
import BannerImage from './Assets/home-banner-image.png'



const Home = () => {
  return (
    <div className='home-container'>
      
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
          <img src={BannerBackground  } alt="Banner" />
        </div>
        <div className='home-text-section'>
          <h1 className='primary-heading'>your favorate food Delivered  hoot and Fresh  </h1>
          <p className='primary-text'>Experience the best food delivery service at your doorstep.</p>
          <button className='secondary-button'>order Now <FiArrowDownRight /></button>

        </div>
        <div className='home-image-container'>
          <img src={BannerImage} alt="Banner" />

        </div>
      </div>
    </div>
  )
}

export default Home

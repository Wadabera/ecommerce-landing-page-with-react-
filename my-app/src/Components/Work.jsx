import React from 'react'
import pickMeals from './Assets/pick-meals-image.png'
import chooseMeals from './Assets/choose-image.png'
import deliveryMeals from './Assets/delivery-image.png'

const Work = () => {
  const workInfData = [
    {
      image: pickMeals,
      title: "Pick Meals",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at est id enim facilisis tincidunt."
    },
    {
      image: chooseMeals,
      title: "Choose Meals",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at est id enim facilisis tincidunt."
    },
    {
      image: deliveryMeals,
      title: "Delivery Meals",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at est id enim facilisis tincidunt."
    },
  ];

  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <p className='primary-subheading'>Work</p>
        <h1 className='primary-heading'>How it Works</h1>
        <p className='primary-text'>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at est id enim facilisis tincidunt
        </p>
      </div>

      <div className='work-section-bottom'>
        {workInfData.map((data, index) => (
          <div key={index} className='work-section-info'>
            <div className='info-boxes-img-container'>
              <img src={data.image} alt={data.title} />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work

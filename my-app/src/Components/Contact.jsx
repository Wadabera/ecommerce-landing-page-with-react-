import React from 'react'

const Contact = () => {
  return (
    <div className='contact-page-wrapper'>
      <h1 className='primary-heading'>Have Questions in mind?</h1>
      <p className='primary-heading'>Let us help you!</p>
      <div className='contact-form-container'>
        
          <input type='text' placeholder='Your Name' required />

          <button type='submit' className='secondary-button'>submit</button>
        
      </div>
    </div>
  )
}

export default Contact

import React from 'react'

const ContactForm = () => {
  return (
    <div className='contact-form'>
      <div className='conatc-detaisl'>
        <h3>Send me a</h3>
        <h2>Message</h2>
        <form className='form-contact'>
          <div className='form-info'>
            <h3>Your name</h3>
            <input type='text' placeholder='enter your name' />
          </div>
          <div className='form-info'>
            <h3>Your email</h3>
            <input type='text' placeholder='enter your email' />
          </div>
          <div className='form-info'>
            <h3>Your message</h3>
            <textarea
              name=''
              id=''
              cols='30'
              rows='10'
              placeholder='write a message'
            ></textarea>
          </div>
          <button className='btn'>send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm

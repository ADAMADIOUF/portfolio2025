import React, { useState } from 'react'
import { useSendContactFormMutation } from '../slices/contactApiSlice'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    emailAdress: '',
    description: '',
  })

  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [sendContactForm, { isLoading, isError }] = useSendContactFormMutation()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      let emailContent = `
        First Name: ${formData.firstName}
        Email Address: ${formData.emailAdress}
        
        Description: ${formData.description}`

      setIsFormSubmitted(true)

      // Send the form data
      await sendContactForm({
        ...formData,
        message: emailContent,
      })

      // Reset form data
      setFormData({
        firstName: '',
        emailAdress: '',
        description: '',
      })

      // Reset the submission status after 10 seconds
      setTimeout(() => {
        setIsFormSubmitted(false)
      }, 10000) // 10 seconds
    } catch (error) {
      console.error('An error occurred while submitting the form:', error)
    }
  }

  return (
    <div className='contact-form'>
      <div className='contact-details'>
        <h3>Send me a</h3>
        <h2>Message</h2>

        {!isFormSubmitted && (
          <form className='form-contact' onSubmit={handleSubmit}>
            <div className='form-info'>
              <h3>Your name</h3>
              <input
                type='text'
                placeholder='Enter your name'
                id='firstName & LastName'
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                required
              />
            </div>
            <div className='form-info'>
              <h3>Your email</h3>
              <input
                type='text'
                placeholder='Enter your email'
                id='emailAddress'
                value={formData.emailAdress}
                onChange={(e) =>
                  setFormData({ ...formData, emailAdress: e.target.value })
                }
                required
              />
            </div>
            <div className='form-info'>
              <h3>Your message</h3>
              <textarea
                cols='30'
                rows='10'
                placeholder='Write a message'
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              ></textarea>
            </div>
            <button className='btn'>
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
            {isError && (
              <div className='error-message'>
                An error occurred while submitting the form. Please try again.
              </div>
            )}
          </form>
        )}

        {isFormSubmitted && !isError && (
          <div className='success-message'>
            Message sent successfully! We will reply to you soon.
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactForm

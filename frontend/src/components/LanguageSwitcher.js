// src/components/LanguageSwitcher.js
import React, { useEffect } from 'react'

const LanguageSwitcher = () => {
  useEffect(() => {
    // Check if Google Translate is already initialized
    if (window.google && window.google.translate) {
      console.log('Google Translate already loaded.')
      window.googleTranslateElementInit()
    } else {
      // Define googleTranslateElementInit if it's not already defined
      window.googleTranslateElementInit = () => {
        try {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,fr',
              layout:
                window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            'google_translate_element'
          )
        } catch (error) {
          console.error('Error initializing Google Translate:', error)
        }
      }

      // Dynamically load the Google Translate script
      const script = document.createElement('script')
      script.src =
        'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      script.async = true
      script.onload = () => {
        console.log('Google Translate script loaded successfully.')
        try {
          window.googleTranslateElementInit() // Call after script is loaded
        } catch (error) {
          console.error('Error calling googleTranslateElementInit:', error)
        }
      }
      script.onerror = (error) => {
        console.error('Error loading the Google Translate script:', error)
      }
      document.body.appendChild(script)
    }
  }, [])

  return <div id='google_translate_element'></div>
}

export default LanguageSwitcher

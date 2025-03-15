import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import SnowEffect from './components/SnowEffect'
import LoadingAnimation from './components/LoadingAnimation' // Import the LoadingAnimation component
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Testimonial from './components/Testimonial'

const App = () => {
  const [loading, setLoading] = useState(true) // State to manage loading

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false) // Hide loading animation after a set time (e.g., 5 seconds)
    }, 5000) // Change the time as needed

    return () => clearTimeout(timer) // Cleanup timer on component unmount
  }, [])

  return (
    <div>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />
         <Testimonial/>
          <Footer /> 
        </>
      )}
    </div>
  )
}

export default App

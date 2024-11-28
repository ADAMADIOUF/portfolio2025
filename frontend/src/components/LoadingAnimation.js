import React, { useState, useEffect } from 'react'


const LoadingAnimation = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 10
        if (newProgress === 100) {
          clearInterval(interval)
        }
        return newProgress
      })
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className='loading-container'>
      <h3>Welcome to</h3>
      <div className='circle'>
        <div className='circle-text'>Adama Diouf Portfolio</div>
        <div
          className='circle-progress'
          style={{ transform: `rotate(${progress * 3.6}deg)` }}
        ></div>
      </div>
    </div>
  )
}

export default LoadingAnimation

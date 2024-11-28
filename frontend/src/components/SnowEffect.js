import React, { useEffect } from 'react'
import * as THREE from 'three'
import snowflakeTexture from '../assets/snowflake.png' // Ensure the path is correct

const SnowEffect = () => {
  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true }) // Enable alpha for transparency
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    // Snow particles setup
    const particleCount = 5000
    const particleGeometry = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i++) {
      particlePositions[i] = Math.random() * 100 - 50 // Random positions
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    )

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.2,
      map: new THREE.TextureLoader().load(snowflakeTexture),
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
    })

    const snowParticles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(snowParticles)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Snow particle movement
      const positions = snowParticles.geometry.attributes.position.array
      for (let i = 1; i < particleCount * 3; i += 3) {
        positions[i] -= 0.05 // Move down
        if (positions[i] < -50) {
          positions[i] = 50 // Reset position
        }
      }
      snowParticles.geometry.attributes.position.needsUpdate = true

      // Render the scene
      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      // Update camera aspect ratio and renderer size
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
      document.body.removeChild(renderer.domElement)
    }
  }, [])

  return null // No UI rendering
}

export default SnowEffect

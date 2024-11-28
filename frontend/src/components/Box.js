import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

const Box = ({ position, heroImage, profileImage }) => {
  const texture = useTexture(heroImage) // Load texture from hero image

  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}

export default Box

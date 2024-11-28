import React from 'react'
import { FaReact, FaGithub } from 'react-icons/fa'
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiJavascript,
  SiVisualstudiocode,
  SiNodedotjs,
  SiExpress,
} from 'react-icons/si'

const Stack = () => {
  return (
    <div className='stacks'>
      <h3>Used</h3>
      <h2>Stacks</h2>
      <div className='stcks-container'>
        <span className='icon'>
          <FaReact size={40} color='#61DAFB' />
          <p>React.js</p>
        </span>
        <span className='icon'>
          <SiTypescript size={40} color='#3178C6' />
          <p>TypeScript</p>
        </span>
        <span className='icon'>
          <SiNextdotjs size={40} color='#000000' />
          <p>Next.js</p>
        </span>
        <span className='icon'>
          <SiTailwindcss size={40} color='#06B6D4' />
          <p>Tailwind CSS</p>
        </span>
        <span className='icon'>
          <SiRedux size={40} color='#764ABC' />
          <p>Redux Toolkit</p>
        </span>
        <span className='icon'>
          <SiJavascript size={40} color='#F7DF1E' />
          <p>JavaScript</p>
        </span>
        <span className='icon'>
          <SiVisualstudiocode size={40} color='#007ACC' />
          <p>VS Code</p>
        </span>
        <span className='icon'>
          <SiNodedotjs size={40} color='#68A063' />
          <p>Node.js</p>
        </span>
        <span className='icon'>
          <SiExpress size={40} color='#000000' />
          <p>Express.js</p>
        </span>
        <span className='icon'>
          <FaGithub size={40} color='#333' />
          <p>GitHub</p>
        </span>
      </div>
    </div>
  )
}

export default Stack

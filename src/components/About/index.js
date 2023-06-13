import { useEffect, useState } from 'react'
import AnimatedCharacters from '../AnimatedCharacters'
import './index.scss'

const About = () => {

    const [characterClass, setCharacterClass] = useState('text-animate')

  return (
    <div className="conatainer about-page">
      <div className="text-zone">
        <h1>
          <AnimatedCharacters
          characterClass={characterClass}
            characterArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            index={15}
          />
        </h1>
        <p>
          Welcome to my software engineer portfolio! I'm Zackary Miller, a
          passionate software engineer with a unique perspective on the IT
          industry. My experience as an IT recruiter opened my eyes to the
          endless possibilities and transformative power of technology. It
          inspired me to pursue a deeper understanding of software engineering,
          and I am currently studying Full Stack web development at Georgia
          Tech.
        </p>
        <p>
          Throughout my journey, I have acquired a comprehensive set of
          technical skills in web development. I am proficient in JavaScript, a
          versatile language that forms the foundation of modern web
          development. I have expertise in frameworks like React and Node.js,
          which allow me to build interactive and scalable applications.
          Additionally, I am skilled in database management systems, front-end
          development, and have a keen eye for writing clean and efficient code.
        </p>
        <p>
          In my portfolio, you will find projects that showcase my technical
          abilities, problem-solving skills, and creativity. Each project
          represents my commitment to delivering robust and scalable software
          solutions. I am dedicated to staying up-to-date with the latest
          advancements in technology and industry best practices, ensuring that
          I can adapt to evolving project requirements and deliver high-quality
          code.
        </p>
        <p>
          Thank you for visiting my portfolio and taking the time to learn about
          my journey as a software engineer. If you have any questions or would
          like to discuss potential collaborations, please feel free to reach
          out. I look forward to connecting with you!
        </p>
      </div>
    </div>
  )
}

export default About

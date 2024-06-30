// app/page.js
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="home-container">
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="gradient-text">Welcome to My Portfolio</h1>
        <p className="subtitle">Crafting beautiful, interactive web experiences</p>
      </motion.div>

      <motion.div
        ref={ref}
        className="about-section"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2>About Me</h2>
        <p>I'm a passionate web developer with a keen eye for design and a love for creating seamless user experiences.<br/> My expertise lies in blending cutting-edge technologies with intuitive design principles.</p>
      </motion.div>

      <motion.div
        className="skills-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h2>Skills</h2>
        <div className="skills-grid">
          {['React', 'Next.js', 'Node.js', 'CSS3', 'JavaScript', 'UI/UX Design'].map((skill, index) => (
            <motion.div
              key={skill}
              className="skill-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
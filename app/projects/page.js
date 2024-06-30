'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [visibleProjects, setVisibleProjects] = useState(6)

  useEffect(() => {
    // 模擬從 API 獲取數據
    const fetchedProjects = [
      {
        id: 1,
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce solution with real-time inventory management.',
        link: '/projects/e-commerce-platform',
        category: 'Web Development'
      },
      {
        id: 2,
        title: 'Social Media Dashboard',
        description: 'An intuitive dashboard for managing multiple social media accounts.',
        link: '#',
        category: 'Data Visualization'
      },
      {
        id: 3,
        title: 'AI-powered Chatbot',
        description: 'A smart chatbot using natural language processing for customer support.',
        link: '#',
        category: 'Artificial Intelligence'
      },
      {
        id: 4,
        title: 'Mobile Fitness App',
        description: 'A comprehensive fitness tracking app with personalized workout plans.',
        link: '#',
        category: 'Mobile Development'
      },
      
      {
        id: 6,
        title: 'Virtual Reality Game',
        description: 'An immersive VR game set in a futuristic cyberpunk world.',
        link: '#',
        category: 'Game Development'
      },
      {
        id: 7,
        title: 'Smart Home IoT System',
        description: 'An integrated IoT system for home automation and energy management.',
        link: '#',
        category: 'Internet of Things'
      },
      {
        id: 8,
        title: 'Augmented Reality Art Gallery',
        description: 'An AR app that transforms public spaces into interactive art exhibitions.',
        link: '#',
        category: 'Augmented Reality'
      },
      // 可以繼續添加更多項目...
    ]
    setProjects(fetchedProjects)
  }, [])

  const loadMoreProjects = () => {
    setVisibleProjects(prevVisible => prevVisible + 3)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const projectVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="projects-container">
      <motion.h1 
        className="gradient-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>
      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.slice(0, visibleProjects).map((project) => (
          <motion.div
            key={project.id}
            className="project-card glass-effect"
            variants={projectVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="project-category">{project.category}</span>
            <Link href={project.link} className="project-link">View Project</Link>
          </motion.div>
        ))}
      </motion.div>
      {visibleProjects < projects.length && (
        <motion.button 
          className="load-more-btn"
          onClick={loadMoreProjects}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Load More Projects
        </motion.button>
      )}
    </div>
  )
}
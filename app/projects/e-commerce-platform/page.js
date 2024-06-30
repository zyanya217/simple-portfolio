'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function EcommercePlatform() {
  return (
    <div className="container project-detail">
      <motion.h1 
        className="gradient-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        E-commerce Platform
      </motion.h1>

      <motion.div
        className="project-content glass-effect"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2>Project Overview</h2>
        <p>
          The E-commerce Platform is a full-stack solution designed to provide a seamless online shopping experience. 
          It features real-time inventory management, secure payment processing, and a user-friendly interface for both customers and administrators.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li>Responsive design for mobile and desktop</li>
          <li>User authentication and profile management</li>
          <li>Product catalog with advanced search and filtering</li>
          <li>Shopping cart and wishlist functionality</li>
          <li>Secure checkout process with multiple payment options</li>
          <li>Real-time inventory tracking and management</li>
          <li>Admin dashboard for product, order, and user management</li>
          <li>Analytics and reporting tools</li>
        </ul>

        <h2>Technologies Used</h2>
        <ul>
          <li>Frontend: React.js, Next.js, CSS3 with Styled Components</li>
          <li>Backend: Node.js, Express.js</li>
          <li>Database: MongoDB</li>
          <li>Authentication: JWT, OAuth</li>
          <li>Payment Processing: Stripe API</li>
          <li>Deployment: Docker, AWS</li>
        </ul>

        <h2>Challenges and Solutions</h2>
        <p>
          One of the main challenges was ensuring real-time inventory updates across multiple concurrent users. 
          We implemented a WebSocket-based solution to push inventory changes to all connected clients, 
          ensuring that users always see the most up-to-date stock information.
        </p>

        <h2>Results</h2>
        <p>
          The platform has significantly improved the client's online sales, with a 40% increase in conversion rate 
          and a 25% reduction in cart abandonment. The real-time inventory system has also reduced overselling incidents by 98%.
        </p>

        <div className="project-links">
          <a href="#" className="btn">Live Demo</a>
          <a href="#" className="btn">GitHub Repository</a>
        </div>
      </motion.div>

      <Link href="/projects" className="back-link">
        ← Back to Projects
      </Link>
    </div>
  )
}
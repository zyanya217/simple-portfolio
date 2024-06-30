// app/layout.js
import './globals.css'

export const metadata = {
  title: 'My Portfolio',
  description: 'A showcase of Next.js and animation skills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <nav className="glass-nav">
            <a href="/" className="nav-link">Home</a>
            <a href="/projects" className="nav-link">Projects</a>
            <a href="/contact" className="nav-link">Contact</a>
          </nav>

          <main>{children}</main>

          <footer>
            <p>© 2024 zyanya</p>
          </footer>
        </div>
      </body>
    </html>
  )
}
// app/api/projects/route.js
export async function GET() {
    const projects = [
      { id: 1, title: 'E-commerce Platform', description: 'A full-stack e-commerce solution with real-time inventory management.', link: '#' },
      { id: 2, title: 'Social Media Dashboard', description: 'An intuitive dashboard for managing multiple social media accounts.', link: '#' },
      { id: 3, title: 'AI-powered Chatbot', description: 'A smart chatbot using natural language processing for customer support.', link: '#' },
    ]
  
    return new Response(JSON.stringify(projects), {
      headers: { 'Content-Type': 'application/json' },
    })
  }
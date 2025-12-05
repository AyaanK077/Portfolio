import { useEffect, useState } from 'react'

import { faCode, faCodeBranch, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

import GamePredictLogo from '../../assets/images/GamePredictLogo.png'
import GameVault from '../../assets/images/GameVault.png'
import panama from '../../assets/images/panama.jpg'
import PDFChatbot from '../../assets/images/PDFCHATBOT.png'
import SnakeLogo from '../../assets/images/SnakeLogo.png'
import SpiritPath from '../../assets/images/SpiritPath.png'
import Sports2You from '../../assets/images/Sports2You.png'
import SSA from '../../assets/images/SSA.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

// Projects data - easily scalable for future additions
const projects = [
  {
    id: 1,
    title: 'Game Predict',
    description: 'GamePredict is an AI/ML-powered web application that predicts the outcomes of NBA games. The platform lets users explore upcoming matchups, view team and player stats, and see predicted results with a clean, interactive interface.',
    technologies: ['React', 'NextJS', 'MongoDB', 'Python', 'FastAPI'],
    category: 'Applications',
    status: 'Completed',
    year: 'April 2025',
    company: 'Kappa Theta Pi',
    features: [
      'AI-powered predictions for NBA games',
      'Interactive UI with pages for home, matches, stats, and settings',
      'Team and player statistics visualization',
      'Modern full-stack setup with responsive frontend and scalable backend'
    ],
    images: [GamePredictLogo], // Provision for multiple images
    githubUrl: 'https://github.com/Aadhavm10/GamePredict',
    liveUrl: null, // Private project
    isPrivate: false
  },
  {
    id: 2,
    title: 'Sports2You',
    description: 'Sports2You (inspired by When2Meet) is a sports scheduling and coordination system that allows college students to share their availability, match times with friends, and set up games quickly. It was developed as part of a Database Systems course project, with an emphasis on 3NF design, functional dependencies, and SQL-based implementation.',
    technologies: ['JavaScript', 'PHP', 'MySQL', 'XAMPP', 'HTML', 'CSS'],
    category: 'Applications',
    status: 'Completed',
    year: 'March 2025',
    company: 'UTD Database Systems Project',
    features: [
      'Availability input: students enter time slots when they are free',
      'Automatic match finder: system highlights overlapping free times for groups',
      'Event creation: users can create and join sports sessions',
      'Database-backed design: relational schema optimized up to 3NF'
    ],
    images: [Sports2You],
    githubUrl: 'https://github.com/AyaanK077/Sports2You',
    liveUrl: null,
    isPrivate: false
  },
  {
    id: 3,
    title: 'Steiner Soccer Academy',
    description: 'Steiner Soccer Academy is a modern web application for a private soccer coaching business. It allows players and parents to book sessions online, while coaches and admins manage schedules, availability, and customer information through an easy-to-use dashboard.',
    technologies: ['NextJS', 'React', 'TypeScript', 'Supabase', 'Vercel'],
    category: 'Websites',
    status: 'Completed',
    year: 'June 2025',
    company: 'Steiner Soccer Academy',
    features: [
      'Customer booking system for training sessions',
      'Admin dashboard to manage availability, view bookings, and update schedules',
      'Calendar integration for easy session tracking',
      'Responsive design for mobile and desktop'
    ],
    images: [SSA],
    githubUrl: 'https://github.com/AyaanK077/Steiner-Soccer-Academy',
    liveUrl: 'https://www.steinersocceracademy.com/',
    isPrivate: false
  },
  {
    id: 4,
    title: 'Spirit Path',
    description: 'SpiritPath is an indoor navigation system designed to help visually impaired individuals move through complex buildings with confidence and independence. The application uses step-by-step guidance, smart route generation, and intuitive audio cues to provide clear directions in environments where GPS cannot operate. SpiritPath focuses on accessibility, reliability, and real-world usability, making indoor spaces more navigable for everyone.',
    technologies: ['StarUML', 'PlantUML', 'XCode', 'Figma', 'UX/UI'],
    category: 'Applications',
    status: 'in-progress',
    year: 'December 2025',
    company: 'UTD SE Group Project',
    features: [
      'Reactive obstacle avoidance; detects obstacles with real-time alerts',
      'Emergency contact fallback',
      'Self-Route Adjustment Configuration',
      'App is hands free'
    ],
    images: [SpiritPath],
    githubUrl: 'https://github.com/dibarra3/spirit-path-site',
    liveUrl: null,
    isPrivate: false
  },
  {
    id: 5,
    title: 'GameVault',
    description: 'GameVault is a secure digital e-commerce web application for PC games, inspired by platforms like Steam. Users can register, browse a catalog of games, view detailed game pages, and purchase titles securely.',
    technologies: ['React', 'Javascript', 'HTML', 'CSS', 'Vite', 'Express'],
    category: 'Applications',
    status: 'Completed',
    year: 'December 2025',
    company: 'UTD Data & Security Group Project',
    features: [
      'Dynamic Game Catalog',
      'User Cart and Checkout Flow',
      'Personalized Profile Page',
      'Search and Filtering'
    ],
    images: [GameVault],
    githubUrl: 'https://github.com/nathandow4060/CS-4389-Security-Project',
    liveUrl: 'https://cs-4389-security-project.vercel.app/',
    isPrivate: false
  },
  {
    id: 6,
    title: 'Portfolio',
    description: 'A modern, interactive portfolio website showcasing my journey as a Software Development Engineer. Built with React and featuring smooth animations, responsive design, and a sleek dark theme.',
    technologies: ['React', 'SCSS', 'FontAwesome', 'CSS3', 'Vercel',],
    category: 'Websites',
    status: 'Completed',
    year: 'December 2025',
    company: 'Personal Project',
    features: [
      'Interactive UI with smooth animations and transitions',
      'Multiple Sections: Home, About, Experience, Projects, Skills, Contact',
      'Sound Integration with ambient background music',
      'Modern Glassmorphism design with blur effects'
    ],
    images: [panama],
    githubUrl: 'https://github.com/AyaanK077/Portfolio',
    liveUrl: null,
    isPrivate: false
  },
  {
    id: 7,
    title: 'Snake Game',
    description: 'The Snake game is a classic arcade-style game where the player controls a growing snake inside a bounded grid. The goal is to eat food, increase your length, and avoid collisions with walls or your own tail. The game focuses on smooth movement, responsive controls, and clean object-oriented design.',
    technologies: ['Java', 'Greenfoot', 'Github',],
    category: 'Games',
    status: 'Completed',
    year: 'November 2024',
    company: 'UTD SE Group Project',
    features: [
      'Smooth Directional Movement',
      'Dynamic Growth System',
      'Collision Detection',
      'Score Tracking'
    ],
    images: [SnakeLogo],
    githubUrl: 'https://github.com/UTDClassroomOrg/courseproject-cse3354-005-f24-cse3354-005-f24_group03',
    liveUrl: null,
    isPrivate: false
  },
  {
    id: 8,
    title: 'PDF Chatbot',
    description: 'PDFChatbot is an AI-powered application that allows users to upload PDFs and interact with them through a conversational interface. Instead of manually searching through long documents, users can ask natural language questions and receive direct, context-aware answers.',
    technologies: ['React', 'Tailwind CSS', 'LangChain', 'Pinecone', 'FastAPI', 'Python'],
    category: 'Applications',
    status: 'Completed',
    year: 'February 2025',
    company: 'Kappa Theta Pi',
    features: [
      'Upload PDFs and extract content in real time',
      'Chat with documents using natural language queries',
      'Context-aware responses powered by embeddings + LLMs',
      'FastAPI backend with vector search and retrieval'
    ],
    images: [PDFChatbot],
    githubUrl: 'https://github.com/AyaanK077/HackAI',
    liveUrl: null,
    isPrivate: false
  }
]

const Projects = () => {
  const projectsArray = 'Projects'.split('')
  const [letterClass, setLetterClass] = useState('text-animate')
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  // Get unique categories for filtering
  const categories = ['All', ...new Set(projects.map(project => project.category))]

  // Filter projects based on selected category
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={projectsArray}
              idx={15}
            />
          </h1>
          <p>
            A collection of my technical work across full stack development, 
            artificial intelligence, data systems, and product focused engineering. 
            Each project reflects my approach to solving real problems, 
            building practical tools, and learning something new along the way.
          </p>
          
          {/* Category Filter */}
          <div className="filter-container">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-container">
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="project-card" style={{animationDelay: `${index * 0.1}s`}}>
                {/* Project Images Section - with provision for multiple images */}
                {project.images && project.images.length > 0 && (
                  <div className="project-images">
                    <div className="image-carousel">
                      {project.images.map((image, idx) => (
                        <img key={idx} src={image} alt={`${project.title} ${idx + 1}`} />
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="project-content">
                  <div className="project-header">
                    <div className="project-meta">
                      <span className="category">{project.category}</span>
                      <span className="year">{project.year}</span>
                      <span className={`status ${project.status.toLowerCase()}`}>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="company">{project.company}</p>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link">
                        <FontAwesomeIcon icon={faCodeBranch} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        <span>Live</span>
                      </a>
                    )}
                    {project.isPrivate && (
                      <span className="private-indicator">
                        <FontAwesomeIcon icon={faCode} />
                        <span>Private Project</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects

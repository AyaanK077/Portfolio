import { useEffect, useState } from 'react'

import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const workExperience = [
  {
    id: 1,
    company: 'Pennymac Financial Services',
    companyUrl: 'https://www.pennymac.com/',
    position: 'DTO Rotational Software Engineer',
    duration: 'Starting June 2026',
    location: 'Carrolton, Texas ',
    achievements: [
      'I am so excited to begin my role at Pennymac this summer as a DTO Rotational Software Engineer! ',
      'It feels like the right next step in my career, and I am looking forward to learning from experienced teams, contributing to real world projects, and growing in an environment that values innovation, collaboration, and continuous improvement.' 
    ]
  },
  {
    id: 2,
    company: 'GigHQ.ai',
    companyUrl: 'https://www.gighq.ai/' ,
    position: 'Software Engineering Intern',
    duration: 'Feb 2025 – Sep 2025',
    location: 'Austin, Texas (Remote)',
    achievements: [
      'Co-developed ResumeRank, an AI-powered resume evaluation engine using LLMs (Gemini/OpenAI) to analyze resumes against job descriptions and generate insightful feedback; supported 300+ users with a 30% increase in interview conversion rate among test users.',
      'Built a production-grade job post parser using Google Gemini API, extracting and summarizing key data fields from unstructured listings, reducing manual parsing time by 80%.',
      'Automated onboarding and engagement workflows using n8n, connecting Firebase, Google Sheets, and Gmail APIs to send tailored emails and track signups, streamlining over 500+ emails to users..'
    ]
  },
  {
    id: 3,
    company: 'Kappa Theta Pi- Professional Technology Organization',
    companyUrl: 'https://www.ktputd.org/',
    position: 'Software Project Lead',
    duration: 'February 2025 — Present',
    location: 'Dallas, Texas',
    achievements: [
      'Managed a 6-member team through weekly Agile sprints to build an AI-powered full-stack app analyzing company credit data and investment potential using GitHub, Jira, and Figma.',
      'Directed technical and career development workshops for 50+ students while participating in 3+ hackathons, driving cross-functional teamwork, communication, and helping 20% secure internships.',
    ]
  },
  {
    id: 4,
    company: 'Steiner Soccer Academy',
    companyUrl: 'https://www.steinersocceracademy.com/',
    position: 'Founder',
    duration: 'June 2021 — August 2025',
    location: 'Austin, Texas',
    achievements: [
      'Founded the first-ever indoor soccer academy in Steiner Ranch, scaling from 0 to 50+ active players and conducting 400+ training sessions with a focus on technical development and leadership.',
      'Designed and launched the academy’s website (TypeScript, HTML/CSS) with a custom-built scheduling system; platform supports 20+ recurring users and improved client coordination by 80%.',
      'Led marketing, operations, and customer engagement independently—resulting in full-capacity enrollment for 5 consecutive seasons and 70% client retention across core age groups.',
    ]
  }
]

const Experience = () => {
  const experienceArray = 'Experience'.split('')
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container experience-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={experienceArray}
              idx={15}
            />
          </h1>
          <p>
            I am someone who adapts quickly to new environments and challenges. 
            I have worked in fast paced AI startup settings where priorities change 
            constantly and learning is nonstop, and I am also part of a technology 
            organization on campus that keeps me connected to a strong community of 
            builders. On top of that, I founded my own business, which taught me how 
            to take ownership, navigate uncertainty, and find solutions even when the 
            path is not clear. All of these experiences have shaped me into a flexible, 
            driven, and collaborative developer who can step into different roles and 
            contribute wherever the team needs me.
          </p>
        </div>

        <div className="experience-container">
          <div className="timeline">
            {workExperience.map((job, index) => (
              <div key={job.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-marker">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <div className="timeline-content">
                  <div className="job-header">
                    <h3 className="company-name">
                      <a href={job.companyUrl} target="_blank" rel="noreferrer">
                        {job.company}
                      </a>
                    </h3>
                    <h4 className="position">{job.position}</h4>
                    <div className="job-meta">
                      <span className="duration">{job.duration}</span>
                      <span className="location">{job.location}</span>
                    </div>
                  </div>
                  <ul className="achievements">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
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

export default Experience

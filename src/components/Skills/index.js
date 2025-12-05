import { useEffect, useState } from 'react'

import Loader from 'react-loaders'

import WordCloud from './wordcloud'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const skillsArray = 'Skills'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <p>
            I have experience across full stack development, artificial intelligence, 
            cloud services, and automation, and I try to bring a calm and organized mindset
             to every project. I care about writing clean reliable code and designing 
             systems that make sense. I am always learning and pushing myself to improve.
              My goal is to build software that feels fast, intuitive, and genuinely useful
               while being someone people enjoy working with.
          </p>
          <p>
            I enjoy building software, but I enjoy building it with the right people even more.
            I am comfortable taking the lead when 
             needed, but I am just as comfortable supporting others and making sure the
            project moves forward smoothly. I see teamwork as a chance to learn from
             different perspectives and create solutions that none of us could build alone.
          </p>
        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Skills

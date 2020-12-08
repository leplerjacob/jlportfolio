import React, { useState } from 'react'
import projOneImg from '../static/img/pastasciutta-img.jpg'
import projTwoImg from '../static/img/O-Space-img.JPG'
import projThreeImg from '../static/img/bloglist-img.JPG'
import projFourImg from '../static/img/WedBand-img.JPG'
import projFiveImg from '../static/img/noteapp-img.JPG'
import projSixImg from '../static/img/it-logger-img.JPG'
import projSevenImg from '../static/img/netflix-clone-img.JPG'
import projEightImg from '../static/img/phonebookapp-img.JPG'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { logDOM } from '@testing-library/react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      link: 'https://vigilant-varahamihira-890faf.netlify.app/',
      title: 'Pastascuitta',
      image: projOneImg,
      technologies: ['HTML', 'CSS', 'Javascript'],
    },
    {
      id: 2,
      link: 'https://o-space.netlify.app/',
      title: 'O-Space',
      image: projTwoImg,
      technologies: ['HTML', 'CSS'],
    },
    {
      id: 3,
      link: 'https://github.com/leplerjacob/bloglist_backend',
      title: 'BlogList-app',
      image: projThreeImg,
      technologies: [
        'HTML',
        'CSS',
        'Javascript',
        'ReactJS',
        'NodeJS/npm',
        'Jest',
        'JsonWebToken',
        'Axios',
        'ExpressJS',
        'Bcrypt',
        'Morgan',
        'MongoDb',
        'Mongoose',
      ],
    },
    {
      id: 4,
      link: 'https://laughing-kepler-c41835.netlify.app/',
      title: 'WedBand',
      image: projFourImg,
      technologies: ['HTML', 'CSS'],
    },
    {
      id: 5,
      link: 'https://protected-oasis-42099.herokuapp.com/',
      title: 'Noteapp',
      image: projFiveImg,
      technologies: [
        'HTML',
        'CSS',
        'Javascript',
        'ReactJS',
        'NodeJS/npm',
        'Jest (for testing)',
        'JsonWebToken',
        'Axios',
        'Express',
        'Bcrypt',
        'Morgan',
        'MongoDb',
        'Mongoose',
      ],
    },
    {
      id: 6,
      link: 'https://it-logger-9af52.web.app/#!',
      title: 'IT-Logger',
      image: projSixImg,
      technologies: [
        'HTML',
        'CSS',
        'Javascript',
        'Materialize',
        'Firebase',
        'ReactJS',
        'Redux',
      ],
    },
    {
      id: 7,
      link: 'https://gifted-raman-661c1b.netlify.app/',
      title: 'Netflix-Clone',
      image: projSevenImg,
      technologies: ['HTML', 'CSS', 'Javascript', 'Axios', 'TMDb'],
    },
    {
      id: 8,
      link: 'https://frightful-cat-53999.herokuapp.com/',
      title: 'Phonebook-app',
      image: projEightImg,
      technologies: [
        'HTML',
        'CSS',
        'Javascript',
        'ReactJS',
        'ExpressJS',
        'MongoDb',
        'Mongoose',
        'Morgan',
        'VSCode REST Client',
      ],
    },
  ]

  const [showProjectsArray, setShowProjectsArray] = useState(
    projects.slice(0, 4)
  )
  const [index, setIndex] = useState(true)

  const changeProjects = () => {
    if (index) {
      setIndex(!index)
      setShowProjectsArray(projects.slice(4, 8))
    } else {
      setIndex(!index)
      setShowProjectsArray(projects.slice(0, 4))
    }
  }

  const mouseOver = ({ target }) => {
    if (target.parentNode.nodeName.toLowerCase() === 'a') {
      target.className = 'hide'
    }
    return
  }

  const mouseLeave = ({ target}) => {
    if (target.nodeName.toLowerCase() === 'a') {
      target.childNodes[0].className = ''
    }
    return
  }

  //   const details = () => {
  //     return (
  //       <div>
  //         <h3>Title of Project</h3>
  //         <p>Technologies Used</p>
  //         <ul>
  //           <li>React</li>
  //           <li>Javascript</li>
  //           <li>HTML</li>
  //         </ul>
  //       </div>
  //     )
  //   }

  return (
    <div className="projects container">
      <FaArrowLeft className="arrow" onClick={changeProjects} />
      <ul className="project list">
        {showProjectsArray.map((project, index) => {
          return (
            <li key={project.id}>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={mouseOver}
                onMouseLeave={mouseLeave}
              >
                <img src={project.image} alt="project-1" id="project-1" />
              </a>
            </li>
          )
        })}
      </ul>
      <FaArrowRight className="arrow" onClick={changeProjects} />
    </div>
  )
}

export default Projects

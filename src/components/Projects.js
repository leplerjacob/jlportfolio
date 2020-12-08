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
      target.parentNode.childNodes[1].className = 'details'
    } else if (target.nodeName.toLowerCase() === 'a') {
        target.childNodes[0].className = 'hide'
        target.childNodes[1].className = 'details'
    }
    return
  }

  const mouseLeave = ({ target }) => {
    if (target.parentNode.parentNode.nodeName.toLowerCase() === 'a') {
      target.parentNode.parentNode.childNodes[0].className = ''
      target.parentNode.className = 'details hide'
    } else if (
      target.parentNode.parentNode.parentNode.nodeName.toLowerCase() === 'a'
    ) {
      target.parentNode.parentNode.className = 'details hide'
      target.parentNode.parentNode.parentNode.childNodes[0].className = ''
    } else if (target.nodeName.toLowerCase() === 'a') {
      target.childNodes[0].className = ''
      target.childNodes[1].className = 'details hide'
    } else {
        target.parentNode.childNodes[0].className = ''
        target.parentNode.childNodes[1].className = 'details hide'
    }
    return
  }

  const details = (project) => {
    return (
      <div className="details hide">
        <h3>{project.title}</h3>
        <p>Techs Used:</p>
        <ul className="project-techs">
          {project.technologies.map((tech) => {
            return <li>{tech} </li>
          })}
        </ul>
      </div>
    )
  }

  return (
    <div className="projects container">
      <FaArrowLeft className="arrow" onClick={changeProjects} />
      <ul className="project list">
        {showProjectsArray.map((project, index) => {
          return (
            <li key={project.id} className="projects">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={mouseOver}
                onMouseLeave={mouseLeave}
              >
                <img src={project.image} alt="project-1" id="project-1" />
                {details(project)}
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

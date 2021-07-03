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
    projects.slice(4, 8)
  )
  const [index, setIndex] = useState(false)

  const changeProjects = () => {
    if (index) {
      setIndex(!index)
      setShowProjectsArray(projects.slice(4, 8))
    } else {
      setIndex(!index)
      setShowProjectsArray(projects.slice(0, 4))
    }
  }

  const checkKey = (e) => {
    e = e || window.event

    if (e.keyCode === 37) {
      changeProjects()
    } else if (e.keyCode === 39) {
      changeProjects()
    }
  }

  document.onkeydown = checkKey

  return (
    <div className="projects-pane">
      <FaArrowLeft className="arrow" onClick={changeProjects} />
      <div className="gallery_container-all">
        {showProjectsArray.map((project) => {
          return (
            <div className="gallery_container" key={project.id}>
              <a href={project.link} target="_blank" rel="noreferrer">
                <img src={project.image} alt="project" />
                <span className="gallery_title">{project.title}</span>
                <span className="gallery_text">
                  <span className="project-techs header">
                    Techs Used: <hr /> <br />
                  </span>
                  <ul className="project-techs">
                    {project.technologies.map((tech, index) => {
                      return <li key={index}>{tech} </li>
                    })}
                  </ul>
                </span>
              </a>
            </div>
          )
        })}
      </div>
      <FaArrowRight className="arrow" onClick={changeProjects} />
    </div>
  )
}

export default Projects

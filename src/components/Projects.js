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
  const [project, setProject] = useState(1)
  const [showOverlay, setShowOverlay] = useState(false)

  const projects = [
    {
      link: 'https://vigilant-varahamihira-890faf.netlify.app/',
      title: 'Pastascuitta',
      image: projOneImg,
      technologies: ['HTML', 'CSS', 'Javascript'],
    },
    {
      link: 'https://o-space.netlify.app/',
      title: 'O-Space',
      image: projTwoImg,
      technologies: ['HTML', 'CSS'],
    },
    {
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
      link: 'https://laughing-kepler-c41835.netlify.app/',
      title: 'WedBand',
      image: projFourImg,
      technologies: ['HTML', 'CSS'],
    },
    {
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
      link: 'https://vigilant-varahamihira-890faf.netlify.app/',
      title: 'IT-Logger',
      image: projSixImg,
      technologies: ['HTML', 'CSS', 'Javascript', 'Materialize', 'Firebase', 'ReactJS', 'Redux'],
    },
    {
      link: 'https://gifted-raman-661c1b.netlify.app/',
      title: 'Netflix-Clone',
      image: projSevenImg,
      technologies: ['HTML', 'CSS', 'Javascript', 'Axios', 'TMDb'],
    },
    {
      link: 'https://frightful-cat-53999.herokuapp.com/',
      title: 'Phonebook-app',
      image: projOneImg,
      technologies: ['HTML', 'CSS', 'Javascript','ReactJS', 'ExpressJS', 'MongoDb','Mongoose', 'Morgan', 'VSCode REST Client'],
    },
  ]

  const changeProjects = () => {
    if (project === 1) {
      setProject(2)
    } else {
      setProject(1)
    }
  }

  const mouseOver = ({ target }) => {
    if (target.parentNode.nodeName.toLowerCase() === 'a') {
      target.className = 'hide'
    }
    console.log(target)
    return
  }

  const mouseLeave = ({ target }) => {
    if (target.nodeName.toLowerCase() === 'a') {
      target.childNodes[0].className = ''
    }
    console.log(target)
    // console.log(Object.values(target.childNodes)[0].nodeName.toLowerCase());
    // console.log(target.parentNode.nodeName.toLowerCase() === 'a');
    return
  }

  const details = () => {
    return (
      <div>
        <h3>Title of Project</h3>
        <p>Technologies Used</p>
        <ul>
          <li>React</li>
          <li>Javascript</li>
          <li>HTML</li>
        </ul>
      </div>
    )
  }

  const projectOne = () => {
    if (project === 1) {
      return (
        <a
          href="https://vigilant-varahamihira-890faf.netlify.app/"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={mouseOver}
          onMouseLeave={mouseLeave}
        >
          <img src={projOneImg} alt="project-1" id="project-1" />
        </a>
      )
    } else {
      return (
        <a
          href="https://protected-oasis-42099.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={projFiveImg} alt="project-1" id="project-1" />
        </a>
      )
    }
  }
  const projectTwo = () => {
    if (project === 1) {
      return (
        <a href="https://o-space.netlify.app/">
          <img
            src={projTwoImg}
            alt="project-1"
            id="project-1"
            target="_blank"
            rel="noreferrer"
          />
        </a>
      )
    } else {
      return (
        <a
          href="https://it-logger-9af52.web.app/#!"
          target="_blank"
          rel="noreferrer"
        >
          <img src={projSixImg} alt="project-1" id="project-1" />
        </a>
      )
    }
  }
  const projectThree = () => {
    if (project === 1) {
      return (
        <a
          href="https://github.com/leplerjacob/bloglist_backend"
          target="_blank"
          rel="noreferrer"
        >
          <img src={projThreeImg} alt="project-1" id="project-1" />
        </a>
      )
    } else {
      return (
        <a
          href="https://gifted-raman-661c1b.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={projSevenImg} alt="project-1" id="project-1" />
        </a>
      )
    }
  }
  const projectFour = () => {
    if (project === 1) {
      return (
        <a
          href="https://laughing-kepler-c41835.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={projFourImg} alt="project-1" id="project-1" />
        </a>
      )
    } else {
      return (
        <a
          href="https://frightful-cat-53999.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={projEightImg} alt="project-1" id="project-1" />
        </a>
      )
    }
  }

  return (
    <div className="projects container">
      <FaArrowLeft className="arrow" onClick={changeProjects} />
      <ul className="project list">
        <li>{projectOne()}</li>
        <li>{projectTwo()}</li>
        <li>{projectThree()}</li>
        <li>{projectFour()}</li>
      </ul>
      <FaArrowRight className="arrow" onClick={changeProjects} />
    </div>
  )
}

export default Projects

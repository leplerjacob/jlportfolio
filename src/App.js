import './App.css'
import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  const [pageToShow, setPageToShow] = useState(0)

  const showPage = (page) => {
    setPageToShow(page)
  }

  const pages = [<Landing />, <Projects />, <Contact />]

  return (
    <div className='front'>
      <NavBar showPage={showPage} />
      {pages[pageToShow]}
      <Footer />
    </div>
  )
}

export default App

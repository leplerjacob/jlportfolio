import React from 'react'

const NavBar = ({showPage}) => {

  const setHome = () => {
    showPage(0)
  }
  const setProjects = () => {
    showPage(1)
  }
  const setContacts = () => {
    showPage(2)
  }

  return (
      <div className="navbar container">
        <h2>Jacob L.</h2>
        <ul>
          {/* <li>About</li> */}
          <li onClick={setHome}>Home</li>
          <li onClick={setProjects}>Projects</li>
          <li onClick={setContacts}>Contact</li>
        </ul>
      </div>
  )
}

export default NavBar

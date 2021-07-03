import React, { useState } from 'react'
import {
  FaRegEnvelope,
  FaPhoneAlt,
  FaSearchLocation,
  FaGithub,
  FaStackOverflow,
} from 'react-icons/fa'

const Footer = () => {
  const [social, setSocial] = useState(null)
  const [timer, setTimer] = useState(null)

  const socMedia = [
    {
      type: 'email',
      text: <a href="mailto: lepler.jacob@gmail.com">lepler.jacob@gmail.com</a>,
    },
    {
      type: 'phone',
      text: (
        <a href="/#" disabled>
          (301) 312-7151
        </a>
      ),
    },
    { type: 'loc', text: 'Washington, D.C.' },
    {
      type: 'github',
      text: (
        <a
          href="https://github.com/leplerjacob"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/leplerjacob
        </a>
      ),
    },
    {
      type: 'stackoverflow',
      text: (
        <a
          href="https://stackoverflow.com/users/14551449/jlpr2020"
          target="_blank"
          rel="noreferrer"
        >
          https://stackoverflow.com/users/14551449/jlpr2020
        </a>
      ),
    },
  ]

  const showEmail = () => {
    setSocial(socMedia[0])
    if (timer) {
      window.clearTimeout(timer)
    }
    setTimer(
      setTimeout(() => {
        setSocial(null)
        setTimer(null)
      }, 5000)
    )
  }
  const showPhone = () => {
    setSocial(socMedia[1])
    if (timer) {
      window.clearTimeout(timer)
    }
    setTimer(
      setTimeout(() => {
        setSocial(null)
        setTimer(null)
      }, 5000)
    )
  }
  const showLoc = () => {
    setSocial(socMedia[2])
    if (timer) {
      window.clearTimeout(timer)
    }
    setTimer(
      setTimeout(() => {
        setSocial(null)
        setTimer(null)
      }, 5000)
    )
  }
  const showGit = () => {
    setSocial(socMedia[3])
    if (timer) {
      window.clearTimeout(timer)
    }
    setTimer(
      setTimeout(() => {
        setSocial(null)
        setTimer(null)
      }, 5000)
    )
  }
  const showSO = () => {
    setSocial(socMedia[4])
    if (timer) {
      window.clearTimeout(timer)
    }
    setTimer(
      setTimeout(() => {
        setSocial(null)
        setTimer(null)
      }, 5000)
    )
  }

  return (
    <div>
      <div className="footer container">
        {social ? social.text : null}
        <ul className="icons-group">
          <li>
            <FaRegEnvelope onClick={showEmail} />
          </li>
          <li>
            <FaPhoneAlt onClick={showPhone} />
          </li>
          <li>
            <FaSearchLocation onClick={showLoc} />
          </li>
          <li>
            <FaGithub onClick={showGit} />
          </li>
          <li>
            <FaStackOverflow onClick={showSO} />
          </li>
        </ul>
        {timer === null ? <h3>&copy; Jacob L. 2020</h3> : null}
      </div>
    </div>
  )
}

export default Footer

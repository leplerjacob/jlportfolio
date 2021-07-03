import React, { useState } from 'react'
import emailjs, { init } from 'emailjs-com'

const ContactMe = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendMessage = (e) => {
    e.preventDefault()

    const userId = process.env.REACT_APP_EMAILJS_ID

    init(userId)

    emailjs.sendForm('contact_service', 'contact_form', e.target).then(
      (res) => {
        console.log('SUCCESS!', res)
        setName('')
        setNumber('')
        setEmail('')
        setMessage('')
      },
      (error) => {
        console.log('FAILED...', error)
      }
    )
    e.target.reset()
  }

  const copy = (e) => {
    e.preventDefault()

    const text = e.target.textContent;
    const elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
  }

  return (
    <form onSubmit={sendMessage} className="form contact">
      <h2>Contact Me</h2>
      <div>
        <input
          type="hidden"
          name="js_id"
          hidden
          value={Math.floor(Math.random() * Math.floor(1000))}
        />
      </div>
      <label htmlFor="name">Name</label>
      <p>
        <input
          autoFocus
          type="text"
          name="js_name"
          placeholder="Enter Name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
      </p>
      <label htmlFor="number">Number</label>
      <p>
        <input
          type="text"
          name="js_number"
          placeholder="Enter Number"
          value={number}
          onChange={({ target }) => setNumber(target.value)}
        />
      </p>
      <label htmlFor="email">Email</label>
      <p>
        <input
          type="text"
          name="js_email"
          placeholder="Enter Email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </p>
      <label htmlFor="message">Message</label>
      <p>
        <textarea
          name="js_message"
          placeholder="Enter Message"
          rows=""
          value={message}
          onChange={({ target }) => setMessage(target.value)}
        ></textarea>
      </p>
      <input type="submit" value="Send Message" className="submit" />
      <div className="side-card">
        <h4>Email: <span id="copy">(click to copy)</span></h4>
        <p onClick={copy}>lepler.jacob@gmail.com</p>
        <h4>Phone:</h4>
        <p>(301)-312-7151</p>
        <h4>Location:</h4>
        <p>Bethesda, MD</p>
      </div>
    </form>
  )
}

export default ContactMe

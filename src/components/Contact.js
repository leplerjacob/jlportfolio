import React from 'react'

const Contact = () => {

    const someFunction = () => {
        // This will submit form web-hook email functionality
    }

  return (
    <div>
      <div className="contact container">
        <h2>Contact Me</h2>
        <form onSubmit={someFunction}>
          <label htmlFor="email">Email</label>
          <input type="email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" cols="30" rows="10" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact

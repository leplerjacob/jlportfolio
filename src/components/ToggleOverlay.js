import React, { useState, useImperativeHandle } from 'react'

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility,
    }
  })

  return (
    <div>
      <div style={hideWhenVisible} onMouseEnter={toggleVisibility}>
        {props.children}
      </div>
      <div style={showWhenVisible} onMouseLeave={toggleVisibility}>
        <div>
            <h2></h2>
        </div>
      </div>
    </div>
  )
})

export default Togglable

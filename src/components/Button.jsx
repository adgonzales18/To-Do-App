import React from 'react'
import './button.css'

function Button({action, buttonName}) {
  return (
          <button onClick={action}>
            <span>{buttonName}</span>
           </button> 
  )
}

export default Button
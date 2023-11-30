import React from 'react'
import "./button.css"

const Button = ({ type, name, onClick, disabled }) => {
  return (
    <button
      className={type === 'SORT' ? 'button sort' : 'button newArray'}
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </button>
  )
}

export default Button

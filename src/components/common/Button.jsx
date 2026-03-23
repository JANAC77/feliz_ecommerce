import React from 'react'
import './Button.css'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon, 
  onClick, 
  fullWidth = false,
  ...props 
}) => {
  return (
    <button 
      className={`btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full' : ''}`}
      onClick={onClick}
      {...props}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  )
}

export default Button
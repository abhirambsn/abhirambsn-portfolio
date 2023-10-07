import React from 'react'

const Card = ({children, className}) => {
  return (
    <div className={`bg-gray-800 p-4 rounded-lg ${className}`}>
        {children}
    </div>
  )
}

export default Card
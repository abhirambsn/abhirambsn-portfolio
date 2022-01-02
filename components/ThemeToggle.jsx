import React from 'react'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../context/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext)
  return (
    <div
      className="p-2 transition duration-500 ease-in-out rounded-full"
    >
      {theme === 'dark' ? (
        <FontAwesomeIcon
          icon={faSun}
          onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark')
          }}
          size="2x"
          className="text-2xl cursor-pointer dark:text-yellow-300"
        />
      ) : (
        <FontAwesomeIcon
          icon={faMoon}
          onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark')
          }}
          size="2x"
          className="text-2xl text-black cursor-pointer dark:text-gray-400"
        />
      )}
    </div>
  )
}

export default Toggle

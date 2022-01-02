import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import NavItem from './NavItem'

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('About')
  const { pathname } = useRouter()

  useEffect(() => {
    if (pathname === '/#main') setActiveItem('About')
    if (pathname === '/projects#main') setActiveItem('Projects')
    if (pathname === '/resume#main') setActiveItem('Resume')
    if (pathname === '/certificates#main') setActiveItem('Certificates')
  }, [pathname])
  return (
    <div className="flex justify-between px-5 py-3 my-3 ">
      <span className="text-xl font-bold text-transparent border-b-4 border-custom_purple dark:border-lightgreen md:text-2xl bg-clip-text bg-gradient-to-br from-custom_purple via-custom_red to-custom_orange dark:from-lightblue dark:to-lightgreen">
        {activeItem}
      </span>
      <div className="flex space-x-5 text-gray-800 dark:text-white font-lg">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/#main"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume#main"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/projects#main"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Certificates"
          route="/certificates#main"
        />
      </div>
    </div>
  )
}

export default Navbar

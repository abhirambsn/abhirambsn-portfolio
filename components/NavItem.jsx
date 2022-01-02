import Link from 'next/link'
import React from 'react'

export default function NavItem({ activeItem, setActiveItem, name, route }) {
  return (
    activeItem !== name && (
      <Link href={route}>
        <a>
          <span
            onClick={() => setActiveItem(name)}
            className="hover:text-custom_black dark:hover:text-gray-400"
          >
            {name}
          </span>
        </a>
      </Link>
    )
  )
}

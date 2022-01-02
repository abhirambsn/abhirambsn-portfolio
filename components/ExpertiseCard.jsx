import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ExpertiseCard({ expertise }) {
  return (
    <div className="flex items-center p-2 space-x-4">
      <FontAwesomeIcon
        icon={expertise.icon}
        size="2x"
        className="w-12 h-12 text-purple-900 dark:text-green-300"
      />
      <div>
        <h4 className="font-bold">{expertise.title}</h4>
        <p>{expertise.about}</p>
      </div>
    </div>
  )
}

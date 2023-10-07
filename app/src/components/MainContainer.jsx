import React from 'react'

const MainContainer = ({children}) => {
  return (
    <main className='flex-1 h-full w-full mt-4'>
        {children}
    </main>
  )
}

export default MainContainer
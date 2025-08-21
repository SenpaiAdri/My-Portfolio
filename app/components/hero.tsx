import React from 'react'
import { Meteors } from './ui/meteors'

const hero = () => {
  return (
    <div className='relative w-full h-screen'>
      <div className='bg-grey w-full h-100'>

      </div>
      <Meteors number={40} />
    </div>
  )
}

export default hero

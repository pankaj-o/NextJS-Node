import React from 'react'

const page = () => {
  return (
    <>
      <div className='bg-slate-300 w-full h-screen flex'>

        <div className='left bg-red-300 w-1/5' >
          left
        </div>

        <div className='centre bg-green-300 w-3/5'>
          centre
        </div>

        <div className='right bg-yellow-300 w-1/5'>
          right
        </div>
      </div>
    </>
  )
}

export default page
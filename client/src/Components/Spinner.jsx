import React from 'react'
import "./Spinner.css"
const Spinner = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <span className="loader" ></span>
      <p className='mt-3'>Loading...</p>
    </div>
  )
}

export default Spinner
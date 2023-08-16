import React from 'react'
import { NavLink } from 'react-router-dom'

function Logo() {
  return (
      <div>
          <NavLink to={'/'}  className="text-xl font-extrabold font-serif md:max-w-sm">
          TECHBLOGR
        </NavLink>
    </div>
  )
}

export default Logo
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaPen } from 'react-icons/fa'

function ModalNav() {
    return (
        <>
            <nav className='bg-red-500  flex flex-col items-center'>
                <NavLink>Home</NavLink>
                <NavLink>About Us</NavLink>
                <NavLink>Articles</NavLink>
                <NavLink>Write <FaPen/> </NavLink>
                <NavLink>Sign In</NavLink>
                <NavLink>Get Started</NavLink>
            </nav>
        </>
  )
}

export default ModalNav
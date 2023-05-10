import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
      <h1>FILMDB</h1>
      <div className="links">
        <Link to='/'>Film list</Link>
        <Link to='/create'>Add Film</Link>
      </div>
    </nav>
  )
}

export default Navbar
import React, {useState} from 'react'


function Navbar() {
  return (
    <> 
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className='navbar-logo'>
                DEDRA
            </Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar
import React from 'react'
import "../css/Navbar.css"

function Navbar() {
  return (
    <nav className='container navbar navbar-dark  mt-1 rounded'>
        <div className='container d-flex justify-content-center'>
            <a className='navbar-brand text-warning' href='/'>Cripto Market</a>
        </div>
    </nav>
  )
}

export default Navbar
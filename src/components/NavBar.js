import React from 'react'
import{ Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <nav calssName="navbar navbar-expand-lg bg-light">
  <div calssName="container-fluid">
    <a calssName="navbar-brand">ECOMMERCE</a>
    <button calssName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span calssName="navbar-toggler-icon"></span>
    </button>
    <div calssName="collapse navbar-collapse" id="navbarNavDropdown">
      <ul calssName="navbar-nav">
        <li calssName="nav-item">
          <Link calssName="nav-link active" aria-current="page" to='/' >Inicio</Link>
        </li>
        <li calssName="nav-item">
          <Link calssName="nav-link" to='/'>Informacion</Link>
        </li>
        <li calssName="nav-item">
          <Link calssName="nav-link" to='/'>Destacado</Link>
        </li>
        <li calssName="nav-item">
          <Link calssName="nav-link" to='/'>Contacto</Link>
        </li>
          </ul>
        
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar


import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Navbar.css'
import 'bootstrap/dist/js/bootstrap.bundle';



function Navbar() {
  return (
    <div>
 <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="/about">About</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="/contact">Contact</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="/login">Login</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="signup">Registration</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

import React from 'react'
import './navbar.css'
import Logo from '../../assets/images/logo_mstskp.png'

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <nav className="nav">

          {/* Logo */}
          <div className="logo">
            <a href="#">
              <img src={Logo} alt="Logo MSTSKP" />
            </a>
          </div>

          {/* Navbar */}
          <ul className="nav__list">
            <li className="nav__items">
              <a href="#" className="nav__links">Top</a>
            </li>
            <li className="nav__items">
              <a href="#" className="nav__links">Features</a>
            </li>
            <li className="nav__items">
              <a href="#" className="nav__links">Reasons</a>
            </li>
            <li className="nav__items">
              <a href="#" className="nav__links">Alternatives</a>
            </li>
          </ul>

          {/* Login Navbar */}
          <ul className="nav__login">
            <li className="nav__login__list">
              <a href="#" className="nav__login__links">Mendaftar</a>
            </li>
            <li className="nav__login__list">
              <a href="#" className="nav__login__links">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
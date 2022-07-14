import React from 'react'
import { NavLink, Link } from 'react-router-dom';
const Navigations = () => {
  return (
    <div classNameName=''>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary container">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="#">ReactJS</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-NavLink active" aria-current="page" to="/homes">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-NavLink " aria-current="page" to="/abouts">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-NavLink " aria-current="page" to="/contacts">Contact</NavLink>
          </li>
         
         
         
        </ul>
      
      </div>
    </div>
    <Link className='btn btn-outline-light w-25' to="/addusers">Add Users</Link>
  </nav></div>
  )
}

export default Navigations;
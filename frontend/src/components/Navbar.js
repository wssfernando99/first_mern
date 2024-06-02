import React from 'react'
import { NavLink } from 'react-router-dom';


export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink to = "/" style={{textDecoration:"none"}}><a className="nav-link active" aria-current="page" href="#">Home</a></NavLink>
        <NavLink to ="/studentadd" style={{textDecoration:"none"}}><a className="nav-link" href="#" >Add Student</a></NavLink>
        <NavLink to ="/showstudents" style={{textDecoration:"none"}}><a className="nav-link" href="#">All Students</a></NavLink>
        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>
  )
}

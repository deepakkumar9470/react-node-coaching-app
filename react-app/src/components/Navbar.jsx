import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
       <nav className="navbar navbar-expand-lg  shadow-lg">
        <div className="container-fluid">
            <Link className="navbar-brand nav-link" to="/">React Coaching</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-2 mr-5">
        
                <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/courses">All Courses</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/coaching">Add Coaching</Link>
                </li> 

            </ul>

            </div>
        </div>
     </nav>
  )
}

export default Navbar
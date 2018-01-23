import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  return (
    <div className="nav">
      <div className="navbar-fixed">
        <nav className="orange darken-2">
          <div className="nav-wrapper container">
            <div className="logo"><a href="#!" className="brand-logo">Logo</a></div>
            <a href="#" data-activates="mobile-demo" className="button-collapse right"><i className="material-icons">menu</i></a>
            {/* This ul will disappear when the screen becomes too small */}
            <ul className="right hide-on-med-and-down">
              <li><Link to='/inspections/new'>Add Inspection</Link></li>
              <li><Link to='/inspections'>Show Inspections</Link></li>
              <li><Link to='/clients/new'>Add Client</Link></li>
              <li><Link to='/clients'>Show Clients</Link></li>
              <li><Link to='/employees/new'>Add Employees</Link></li>
              <li><Link to='/employees'>Show Employees</Link></li>
              <li><Link to='/signin'>Log In</Link></li>
              <li><Link to='/signout'>Sign Out</Link></li>
              <li><Link to='/register'>New user</Link></li>
            </ul>
          </div> {/* end nav-wrapper container div */}
        </nav>
      </div> {/* end navbar-fixed div */}
      {/* we need to put the side-nav ul outside of the nav to get both fixed-navbar and hamburger to work together */}
      <ul className="side-nav" id="mobile-demo">
        <li className="grey lighten-3">Inspections</li>
        <li><Link to='/inspections/new'>Add Inspection</Link></li>
        <li><Link to='/inspections'>Show Inspections</Link></li>
        <li className="grey lighten-3">Clients</li>
        <li><Link to='/clients/new'>Add Client</Link></li>
        <li><Link to='/clients'>Show Clients</Link></li>
        <li className="grey lighten-3">Employees</li>
        <li><Link to='/employees/new'>Add Employees</Link></li>
        <li><Link to='/employees'>Show Employees</Link></li>
        <li><Link to='/signin'>Log In</Link></li>
        <li><Link to='/signout'>Sign Out</Link></li>
        <li><Link to='/register'>New user</Link></li>
      </ul>

    </div>
  )
}

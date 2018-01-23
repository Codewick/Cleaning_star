import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  return (

    <div> {/* This div is required to server as parent div otherwise React breaks; Can only return one parent element */}


      {/* structure of dropdown menu */}
      <ul id="inspection-drop" className="dropdown-content">
        <li><Link to='/inspections/new'>Add Inspection</Link></li>
        <li><Link to='/inspections'>Show Inspections</Link></li>
      </ul>

      <ul id="client-drop" className="dropdown-content">
        <li><Link to='/clients/new'>Add Client</Link></li>
        <li><Link to='/clients'>Show Clients</Link></li>
      </ul>

      <ul id="employee-drop" className="dropdown-content">
        <li><Link to='/employees/new'>Add Employees</Link></li>
        <li><Link to='/employees'>Show Employees</Link></li>
      </ul>

      <ul id="account-drop" className="dropdown-content">
        <li><Link to='/signin'>Log In</Link></li>
        <li><Link to='/signout'>Sign Out</Link></li>
        <li><Link to='/register'>New user</Link></li>
      </ul>

      <div className="nav">
        <div className="navbar-fixed">
          <nav className="orange darken-2">
            <div className="nav-wrapper container">
              <div className="logo"><a href="#!" className="brand-logo">Logo</a></div>
              <a href="#" data-activates="mobile-demo" className="button-collapse right"><i className="material-icons">menu</i></a>
              {/* This ul will disappear when the screen becomes too small */}


              <ul className="right hide-on-med-and-down">

                {/* inspection dropdown */}
                <li><a className="dropdown-button" href="#!" data-activates="inspection-drop">Inspection<i className="material-icons right">arrow_drop_down</i></a></li>

                {/* client dropdown */}
                <li><a className="dropdown-button" href="#!" data-activates="client-drop">Client<i className="material-icons right">arrow_drop_down</i></a></li>

                {/* employee dropdown */}
                <li><a className="dropdown-button" href="#!" data-activates="employee-drop">Employee<i className="material-icons right">arrow_drop_down</i></a></li>

                {/* account dropdown */}
                <li><a className="dropdown-button" href="#!" data-activates="account-drop">Account<i className="material-icons right">arrow_drop_down</i></a></li>

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
          <li className="grey lighten-3">Account</li>
          <li><Link to='/signin'>Log In</Link></li>
          <li><Link to='/signout'>Sign Out</Link></li>
          <li><Link to='/register'>New user</Link></li>
        </ul>

      </div>
    </div>
  )
}

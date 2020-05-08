import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';
import './Navbar.sass';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <ul className="navbar-nav nav-wrap">
        <li className="nav-item active">
          <NavLink to={routes.home} className="nav-link">
            HOME
          </NavLink>
        </li>
        <li className="nav-item active">
          <NavLink to={routes.optional} className="nav-link">
            OPTIONAL
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

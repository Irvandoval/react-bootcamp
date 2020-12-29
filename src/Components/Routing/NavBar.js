import React from 'react';
import { Nav } from 'grommet';
import { Link } from 'react-router-dom';
import { routes } from './utils';

function NavBar() {
  return (
    <Nav direction="row">
      {routes.map((route) => {
        return (
          <Link key={route.to} to={route.to} title={route.text}>
            {route.icon}
          </Link>
        );
      })}
    </Nav>
  );
}

export default NavBar;

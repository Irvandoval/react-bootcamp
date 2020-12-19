import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/jsx">JSX</Link>
        </li>
        <li>
          <Link to="/thinking-in-react">Thinking in React</Link>
        </li>
        <li>
          <Link to="/state-vs-props">State vs Props</Link>
        </li>
        <li>
          <Link to="/todos">Todo List</Link>
        </li>
        <li>
          <Link to="/apis">API Interactions</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;

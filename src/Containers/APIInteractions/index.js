import React from 'react';
import { Link } from 'react-router-dom';

function APIInteractions() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/countries">REST Countries</Link>
        </li>
        <li>
          <Link to="/blog">REST Blog</Link>
        </li>
        <li>
          <Link to="/post-user">REST User</Link>
        </li>
      </ul>
    </nav>
  );
}

export default APIInteractions;

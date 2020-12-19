import React from 'react';
import BlogProvider from './Context';
import Users from './Users';

function Blog() {
  return (
    <div className="Blog-Container">
      <h3>Hey look!, here's a list of registered users in blog</h3>
      <h5>
        Using Axios for asynchronous HTTP requests and then/catch blocks
        promises handler
      </h5>
      <h6>
        <a href="https://jsonplaceholder.typicode.com/">
          https://jsonplaceholder.typicode.com/
        </a>
      </h6>

      <BlogProvider>
        <Users />
      </BlogProvider>
    </div>
  );
}

export default Blog;

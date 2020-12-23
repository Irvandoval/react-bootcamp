import { Anchor, Box, Heading } from 'grommet';
import React from 'react';
import BlogProvider from './Context';
import Users from './Users';

function Blog() {
  return (
    <Box pad="medium" gap="medium">
      <Heading level="4" margin="none" color="brand">
        Hey look!, here's a list of registered users in blog
      </Heading>

      <Heading level="5" margin="none" color="brand">
        Using Axios for asynchronous HTTP requests and then/catch blocks
        promises handler
      </Heading>

      <Heading level="6" margin="none" color="brand">
        <Anchor
          href="https://jsonplaceholder.typicode.com/"
          label="https://jsonplaceholder.typicode.com/"
        />
      </Heading>

      <BlogProvider>
        <Users />
      </BlogProvider>
    </Box>
  );
}

export default Blog;

import { Box, Text } from 'grommet';
import { Code, Home, Js, Node, Reactjs, Task } from 'grommet-icons';
import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
      <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
        <Link to="/">
          <Home color="light-1" />
          <Text size="large" color="light-1" margin="small">
            Home
          </Text>
        </Link>
      </Box>

      <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
        <Link to="/jsx">
          <Js color="light-1" />
          <Text size="large" color="light-1" margin="small">
            JSX
          </Text>
        </Link>
      </Box>

      <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
        <Link to="/thinking-in-react">
          <Reactjs color="light-1" />
          <Text size="large" color="light-1" margin="small">
            Thinking in React
          </Text>
        </Link>
      </Box>

      <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
        <Link to="/state-vs-props">
          <Code color="light-1" />
          <Text size="large" color="light-1" margin="small">
            State vs Props
          </Text>
        </Link>
      </Box>

      <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
        <Link to="/todos">
          <Task color="light-1" />
          <Text size="large" color="light-1" margin="small">
            Todo List
          </Text>
        </Link>
      </Box>

      <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
        <Link to="/apis">
          <Node color="light-1" />
          <Text size="large" color="light-1" margin="small">
            API Interactions
          </Text>
        </Link>
      </Box>

      <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
        <Link to="/redux">
          <Node color="light-1" />
          <Text size="large" color="light-1" margin="small">
            Redux
          </Text>
        </Link>
      </Box>
    </Box>
  );
}

export default Menu;

import React from 'react';
import {
  CloudSoftware,
  Code,
  Connect,
  GraphQl,
  Home,
  Html5,
  Node,
  Reactjs,
  Task,
  VmMaintenance,
} from 'grommet-icons';

export const routes = [
  {
    to: '/',
    icon: <Home color="light-1" />,
    text: 'Home',
  },
  {
    to: '/jsx',
    icon: <Html5 color="light-1" />,
    text: 'JSX',
  },
  {
    to: '/thinking-in-react',
    icon: <Reactjs color="light-1" />,
    text: 'Thinking in React',
  },
  {
    to: '/state-vs-props',
    icon: <Code color="light-1" />,
    text: 'State vs Props',
  },
  {
    to: '/todos',
    icon: <Task color="light-1" />,
    text: 'Todo List',
  },
  {
    to: '/apis',
    icon: <Node color="light-1" />,
    text: 'API Interactions',
  },
  {
    to: '/redux',
    icon: <Connect color="light-1" />,
    text: 'Redux',
  },
  {
    to: '/redux-toolkit',
    icon: <VmMaintenance color="light-1" />,
    text: 'Redux Toolkit',
  },
  {
    to: '/react-query',
    icon: <GraphQl color="light-1" />,
    text: 'React Query',
  },
  {
    to: '/contentful',
    icon: <CloudSoftware color="light-1" />,
    text: 'Contentful',
  },
];

import { Box } from 'grommet';
import React from 'react';
import TodosProvider from './Context';
import List from './List';
import NavBar from './NavBar';

function TodoExample() {
  return (
    <Box
      background="light-1"
      border={{ color: 'brand', size: 'large' }}
      pad="medium"
    >
      <TodosProvider>
        <NavBar />
        <List />
      </TodosProvider>
    </Box>
  );
}

export default TodoExample;

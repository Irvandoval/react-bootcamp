import React from 'react';
import TodosProvider from './Context';
import List from './List';
import NavBar from './NavBar';

function TodoExample() {
  return (
    <div className="Todos-Container">
      <TodosProvider>
        <NavBar />
        <List />
      </TodosProvider>
    </div>
  );
}

export default TodoExample;

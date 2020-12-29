import { Tab, Tabs } from 'grommet';
import React from 'react';
import Blog from './Blog';
import Countries from './Countries';
import Users from './Users';

function APIInteractions() {
  return (
    <Tabs margin="medium">
      <Tab title="REST Countries" margin="medium">
        <Countries />
      </Tab>
      <Tab title="REST Blog" margin="medium">
        <Blog />
      </Tab>
      <Tab title="REST Users (React-Query)" margin="medium">
        <Users />
      </Tab>
    </Tabs>
  );
}

export default APIInteractions;

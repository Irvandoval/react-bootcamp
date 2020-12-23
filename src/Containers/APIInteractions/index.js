import { Tab, Tabs } from 'grommet';
import React from 'react';
import Blog from './Blog';
import Countries from './Countries';

function APIInteractions() {
  return (
    <Tabs margin="medium">
      <Tab title="REST Countries">
        <Countries />
      </Tab>
      <Tab title="REST Blog">
        <Blog />
      </Tab>
    </Tabs>
  );
}

export default APIInteractions;

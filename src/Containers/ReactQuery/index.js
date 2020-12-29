import React from 'react';
import { Tab, Tabs } from 'grommet';
import { GraphQl, Reactjs } from 'grommet-icons';
import Products from './Products';
import Products2 from './Products2';
import Users from './Users';

function ReactQuery() {
  return (
    <Tabs margin="medium">
      <Tab title="REST Products (useEffect)" margin="medium" icon={<Reactjs />}>
        <Products />
      </Tab>
      <Tab
        title="REST Products (React-Query)"
        margin="medium"
        icon={<GraphQl />}
      >
        <Products2 />
      </Tab>
      <Tab title="REST Users (React-Query)" margin="medium" icon={<GraphQl />}>
        <Users />
      </Tab>
    </Tabs>
  );
}

export default ReactQuery;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../../Containers/Main';
import StateVsProps from '../../Containers/StateVsProps';
import ThinkingInReact from '../../Containers/ThinkingInReact';
import JSXExample from '../../Containers/JSXExample';
import TodoExample from '../../Containers/TodoExample';
import APIInteractions from '../../Containers/APIInteractions';
import ReduxExample from '../../Containers/ReduxExample';
import ReduxToolkit from '../../Containers/ReduxToolkit';
import ReactQuery from '../../Containers/ReactQuery';
import Contentful from '../../Containers/Contentful';
import Entry from '../../Containers/Contentful/Components/Entry';
import NoMatch from './NoMatch';
import { Box } from 'grommet';

/**
 * Home will be <Main> component, to avoid matching to
 * routes, we use "exact" prop
 * All routes matched that are not configured, will redirect
 * to an error page.
 */
function Routing() {
  return (
    <Box width="xxlarge">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/jsx">
          <JSXExample />
        </Route>
        <Route path="/thinking-in-react">
          <ThinkingInReact />
        </Route>
        <Route path="/state-vs-props">
          <StateVsProps />
        </Route>
        <Route path="/todos">
          <TodoExample />
        </Route>
        <Route path="/apis">
          <APIInteractions />
        </Route>
        <Route path="/redux">
          <ReduxExample />
        </Route>
        <Route path="/redux-toolkit">
          <ReduxToolkit />
        </Route>
        <Route path="/react-query">
          <ReactQuery />
        </Route>
        <Route path="/contentful/entries/:id?">
          <Entry />
        </Route>
        <Route path="/contentful">
          <Contentful />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Box>
  );
}

export default Routing;

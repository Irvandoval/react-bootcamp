import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../../Containers/Main';
import StateVsProps from '../../Containers/StateVsProps';
import ThinkingInReact from '../../Containers/ThinkingInReact';
import JSXExample from '../../Containers/JSXExample';
import TodoExample from '../../Containers/TodoExample';
import APIInteractions from '../../Containers/APIInteractions';
import ReduxExample from '../../Containers/ReduxExample';
import NoMatch from './NoMatch';

/**
 * Home will be <Main> component, to avoid matching to
 * routes, we use "exact" prop
 * All routes matched that are not configured, will redirect
 * to an error page.
 */
function Routing() {
  return (
    <div>
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
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default Routing;

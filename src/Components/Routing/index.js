import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from '../../Containers/Main';
import StateVsProps from '../../Containers/StateVsProps';
import ThinkingInReact from '../../Containers/ThinkingInReact';
import JSXExample from '../../Containers/JSXExample';
import TodoExample from '../../Containers/TodoExample';
import APIInteractions from '../../Containers/APIInteractions';
import Countries from '../../Containers/APIInteractions/Countries';
import Blog from '../../Containers/APIInteractions/Blog';
import PostUser from '../../Containers/APIInteractions/PostUser';
import NoMatch from './NoMatch';
import Menu from './Menu';

/**
 * Home will be <Main> component, to avoid matching to
 * routes, we use "exact" prop
 * All routes matched that are not configured, will redirect
 * to an error page.
 */
function Routing() {
  return (
    <Router>
      <div>
        <Menu />

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
          <Route path="/countries">
            <Countries />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/post-user">
            <PostUser />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routing;

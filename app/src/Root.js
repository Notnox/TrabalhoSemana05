import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';
import App from './App';

  const Root = () => {
      return (
        <Router>
            <Switch>
                <Route path='/' component={App} />
            </Switch>
        </Router>
      );
  }

  export default Root;
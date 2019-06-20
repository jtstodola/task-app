import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { Tasks, Login } from './views';
// import { App } from './App';

class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ Login } />
        <Route exact path="/tasks" component={ Tasks } />
      </div>
    )
  }
}

export default Routes;

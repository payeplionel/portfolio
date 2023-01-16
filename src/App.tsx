import './App.scss';
import Home from '../src/components/home-component/home';
import React, { FunctionComponent } from 'react';
import { Route,BrowserRouter as  Router, Switch } from 'react-router-dom';

const App: FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </Router>
   )
}

export default App;

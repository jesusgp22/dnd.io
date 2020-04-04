import React from 'react';
import Welcome from './Welcome';
import Room from './Room'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Switch>
        <Route path='/room/:roomId'>
          <Room />
        </Route>
        <Route path='/'>
          <Welcome />
        </Route>  
      </Switch>
    </Router>
  );
}

export default App;

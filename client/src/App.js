import React from 'react';
import Welcome from './Welcome';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useSocket } from './socket';

const App = () => {

  useSocket()
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Welcome />
        </Route>  
      </Switch>
    </Router>
  );
}

export default App;

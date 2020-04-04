import React from 'react';
import Welcome from './Welcome'

import { useSocket } from './socket'

const App = () => {

  useSocket()
  return (
    <Welcome />
  );
}

export default App;

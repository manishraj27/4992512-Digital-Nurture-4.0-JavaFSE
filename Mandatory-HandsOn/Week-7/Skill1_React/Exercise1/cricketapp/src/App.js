import React, { useState } from 'react';
import './App.css';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

const App = () => {
  const [flag, setFlag] = useState(true);

  return (
    <div className="App">
      <h1>Cricket App</h1>
      <button onClick={() => setFlag(!flag)}>
        Toggle View
      </button>
      <p>Current Flag: {flag.toString()}</p>
      
      {/* Simple if-else with flag variable */}
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
};

export default App;

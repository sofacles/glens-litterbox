import React from 'react';
import './App.css';
//import CountdownWithUseState from "./CountdownWithUseState";
import CountdownWithUseEffect from "./CountdownWithUseEffect";

const App: React.FC = () => {
  return (
    <div className="App">
      <CountdownWithUseEffect />
    </div>
  );
}

export default App;

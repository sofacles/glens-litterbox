import React from 'react';
import {SrcContextProvider} from "./SrcContext";
import ContextConsumer from "./ContextConsumer";
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <SrcContextProvider>
        <ContextConsumer />
      </SrcContextProvider>
    </div>
  );
}

export default App;

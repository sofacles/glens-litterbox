import React from 'react';
import './App.css';
import { RatedItem} from "./RatedItem";

const App: React.FC = () => {
  return (
    <div className="App">
      <RatedItem rating="3" text="Tortilla Espanola" />
    </div>
  );
}

export default App;

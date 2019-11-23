import React from 'react';
import ThreePartPage from "./ThreePartPage"
import './App.css';
import { FirstPart, SecondPart, ThirdPart } from './Parts';


const App: React.FC = () => {
  return (
    <div className="App">
     <ThreePartPage makeFirstPart={FirstPart} makeSecondPart={SecondPart} makeThirdPart={ThirdPart}  />
    </div>
  );
}

export default App;

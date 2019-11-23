import React from 'react';
import ThreePartPage from "./ThreePartPage"
import './App.css';
import { PurelyVisualBackButton, StagingArea, PurelyVisualForwardButton } from './Parts';


const App: React.FC = () => {
  return (
    <div className="App">
      <ThreePartPage
        makeVisualBackButton={PurelyVisualBackButton}
        makeStagingArea={StagingArea}
        makeVisualForwardButton={PurelyVisualForwardButton}
      />
    </div>
  );
}

export default App;

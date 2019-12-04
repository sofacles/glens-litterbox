import React from 'react';
import CarouselViewer from "./CarouselViewer";
import { SrcContextProvider } from "./SrcContext"
import './App.css';
import { PurelyVisualBackButton, PurelyVisualForwardButton } from './Parts';
import StagingArea from "./StagingArea";


const App: React.FC = () => {
  return (
    <div className="App">
      <SrcContextProvider>
        <CarouselViewer
          makeVisualBackButton={PurelyVisualBackButton}
          makeVisualForwardButton={PurelyVisualForwardButton}
          stagingArea={<StagingArea  />}
        />
      </SrcContextProvider>
    </div>
  );
}

export default App;

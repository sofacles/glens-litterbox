import React from 'react';
import CarouselViewer from "./CarouselViewer";
import { SrcContextProvider } from "./SrcContext"
import './App.css';
import { PurelyVisualBackButton, PurelyVisualForwardButton } from './Parts';


const App: React.FC = () => {
  return (
    <div className="App">
      <SrcContextProvider>
        <CarouselViewer
          makeVisualBackButton={PurelyVisualBackButton}
          makeVisualForwardButton={PurelyVisualForwardButton}
          items={["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"]}
        />
      </SrcContextProvider>
    </div>
  );
}

export default App;

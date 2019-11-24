import React from 'react';
import CarouselViewer from "./CarouselViewer"
import './App.css';
import { PurelyVisualBackButton, PurelyVisualForwardButton } from './Parts';
import Carousel from "./Carousel";


const App: React.FC = () => {
  const imageMan = "images/image1.png"
  return (
    <div className="App">
      <CarouselViewer
        makeVisualBackButton={PurelyVisualBackButton}
        stagingArea={<Carousel src={imageMan} />}
        makeVisualForwardButton={PurelyVisualForwardButton}
      />
    </div>
  );
}

export default App;

import React from 'react';
import CarouselViewer from "./CarouselViewer"
import './App.css';
import { PurelyVisualBackButton, PurelyVisualForwardButton } from './Parts';


const App: React.FC = () => {
  return (
    <div className="App">
      <CarouselViewer
        makeVisualBackButton={PurelyVisualBackButton}
        makeVisualForwardButton={PurelyVisualForwardButton}
        items={["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"]}
      />
    </div>
  );
}

export default App;

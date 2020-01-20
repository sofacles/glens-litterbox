import React from "react";
import { SpinnerWhileLoading } from "./SpinnerWhileLoading";
import FeaturedColorDisplay from "./FeaturedColorDisplay";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <SpinnerWhileLoading
        content={colors => {
          return <FeaturedColorDisplay colors={colors} />;
        }}
        url="/api/healthcheck"
      ></SpinnerWhileLoading>
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { RatedItem } from "./RatedItem";

const App = () => {
  const [colors, setColors] = useState(null);
  useEffect(() => {
    window.setTimeout(() => {
      axios.get("/api/healthcheck").then(
        response => {
          let ratedColors = {};
          response.data.colors.forEach(c => {
            ratedColors[c] = { rating: 3 };
          });
          setColors(ratedColors);
        },
        error => {
          console.log(error);
        }
      );
    }, 2000);
  }, [setColors]);

  let colorElements = colors
    ? Object.keys(colors).map(k => (
        <RatedItem
          text={k}
          rating={colors[k].rating}
          onRatingChange={(n, text) => {
          
            setColors({
              ...colors,
              [text]: { rating: n }
            });
          }}
          key={k}
        ></RatedItem>
      ))
    : [];

  return (
    <div className="App">
      <ul>{colorElements}</ul>
    </div>
  );
};

export default App;

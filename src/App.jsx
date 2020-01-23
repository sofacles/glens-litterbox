import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { RatedItem} from "./RatedItem";

const App = () => {
  const [colors, setColors] = useState(null);
  useEffect(() => {
    window.setTimeout(() => {
      axios.get("/api/healthcheck").then(
        response => {
          setColors(response.data.colors);
        },
        error => {
          console.log(error);
        }
      );
    }, 2000);
  }, [setColors]);

  let colorElements = colors ? colors.map(c => <RatedItem text={c} rating={3} key={c}>{c}</RatedItem>) : [];
  return (
    <div className="App">
      <ul>{colorElements}</ul>
    </div>
  );
};

export default App;

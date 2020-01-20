import React, { useState, useEffect } from "react";
import axios from "axios";

const SpinnerWhileLoading = ({ content, url }) => {
  const [contentReady, setContentReady] = useState(false);
  const [colors, SetColors] = useState([]);

  useEffect(() => {
    debugger;
    setTimeout(() => {
      axios.get(url).then(
        data => {
          SetColors(data.data.colors);
          setContentReady(true);
        },
        error => {
          console.info(error);
        }
      );
    }, 2000);
  }, [url]);
  return (
    <>
    
      {!contentReady && <div className="loader">Loading... </div>}
      {contentReady && content(colors)}
    </>
  );
};

export { SpinnerWhileLoading };

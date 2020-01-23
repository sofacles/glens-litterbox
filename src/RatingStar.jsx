import React from "react";

const RatingStar = props => {
  return (
    <svg
      className="rating-star"
      width="300px"
      height="275px"
      viewBox="0 0 300 275"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      onClick={e => props.onRate(props.n)}
    >
      <polygon
        fill={props.on ? "orange" : "gray"}
        stroke="orange"
        strokeWidth="10"
        color="orange"
        points="150,25 179,111 269,111 197,165  223,251 150,200 77,251 103,165 31,111 121,111"
      />
    </svg>
  );
};


export default RatingStar;
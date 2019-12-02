import React from "react"


interface ThreePartProps {
    makeVisualBackButton: () => JSX.Element,
    // stagingArea: JSX.Element,
    makeVisualForwardButton: () => JSX.Element,
    items: string[]
  }

  export default ThreePartProps;
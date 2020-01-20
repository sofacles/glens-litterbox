import React from "react";

const FeaturedColorDisplay = (props) => {
    let colorElements = props.colors.map(c => <li key={c}>{c}</li>);
    return( <ul>{colorElements}</ul> );
}

export default FeaturedColorDisplay;
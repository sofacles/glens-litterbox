import React from "react";

const FlexSelect = (props) => {
    let ourOptions = props.StringsToShow.map( s => (<option value={s}>{s}</option>));
    return (
    <select value={props.selectedValue} onChange={(e) => {
        if (e.target.value === "other") {
            props.userWantsToCreateCustomValue(true);
        } else {
            props.userWantsToCreateCustomValue(false);
        }
    }}>
        {ourOptions}
    </select> );   
}

export default FlexSelect;
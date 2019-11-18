import React, { useState } from 'react';
import './App.css';
import FlexSelect from "./flex-select";

const App: React.FC = () => {

  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customTextVal, setCustomTextVal] = useState("");
  const [desiredSelectedValueOfFlexSelect, setDesiredSelectedValueOfFlexSelect] = useState("b");
  const [stringsImShowing, setStringsImShowing] = useState(["a", "b", "c", "other"]);

  return (
    <div className="App">
      <FlexSelect selectedValue={desiredSelectedValueOfFlexSelect} userWantsToCreateCustomValue={(showInputBox: boolean) => {
        setShowCustomInput(showInputBox);
      }} StringsToShow={stringsImShowing} />
      <div>
        customTextVal: <input value={customTextVal} onChange={(e) => {
          setCustomTextVal(e.target.value);
        }} />
      </div>
      <div>
        showCustomInput: <input type="checkbox" checked={showCustomInput} />
      </div>
      <div>
        customTextVal: <span>{customTextVal}</span>
      </div>
      <div>
        Command: <button onClick={(e) => {
          setStringsImShowing([ customTextVal ].concat( stringsImShowing ));
          setDesiredSelectedValueOfFlexSelect(customTextVal);
        }}>Add String </button>
      </div>
    </div>
  );
}

export default App;

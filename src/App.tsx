import React, {useState} from "react";
import ComboBox from "./ComboBoxWrapper";
import "./App.css";

const App: React.FC = () => {

  const [value, setValue] = useState("blank");
  const options = [" -- choose -- ", "Benjamin Moore", "Sherwin Williams", "Miller", "Behr", "ValSpar"];

  const handleChange = (val: string) => {
    setValue(val);
  }
  return (
    <div className="App">
      <ComboBox valueChanged={handleChange} values={options} />
      <div>Selected value is: {value}</div>
    </div>
  );
};

export default App;

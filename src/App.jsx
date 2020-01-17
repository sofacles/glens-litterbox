import React, { useEffect, useState} from 'react';
import { connect } from "react-redux"
import './App.css';
import axios from "axios";

const App = (props) => {
 const [colors, setColors] = useState([]);
  useEffect(() => {
    debugger;
    axios.get("/api/healthcheck")
    .then( (response) => {
      debugger;
      setColors(response.data.colors);
    })
  }, [])
  
  let colorElements = colors.map(c => (<li>{c}</li>));
  return (
    <div className="App">
      {props.red ? "red" : "not red"} , {props.green ? "green" : "not green"}
      <div>
        <button onClick={props.makeGreen}>Make Green</button>
      </div>
    <ul>{colorElements}</ul>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    makeGreen: () => {
      dispatch({type: "MAKE_GREEN"});
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)( App );

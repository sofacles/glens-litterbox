import React from 'react';
import { connect } from "react-redux"
import './App.css';

const App = (props) => {
  
  return (
    <div className="App">
      {props.red ? "red" : "not red"} , {props.green ? "green" : "not green"}
      <div>
        <button onClick={props.makeGreen}>Make Green</button>
      </div>
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

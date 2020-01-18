import React, { useEffect } from 'react';
import { connect } from "react-redux"
import './App.css';
import { MakeGreen, FetchColors, SetLoading } from "./store/actions";

const App = (props) => {
  const {
    SetLoading, FetchColors
  } = props;
  useEffect(() => {
    SetLoading();
    FetchColors();
  }, [SetLoading, FetchColors]);

  let colorElements = props.colors ? props.colors.map(c => (<li key={c}>{c}</li>)) : [];
  return (
    <div className="App">
      {props.red ? "red" : "not red"} , {props.green ? "green" : "not green"}
      <div>
        <button onClick={props.MakeGreen}>Make Green</button>
      </div>
      <div>{props.loading ? "loading..." : "" }</div>
    <ul>{colorElements}</ul>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}


export default connect(mapStateToProps, { MakeGreen, FetchColors, SetLoading })( App );

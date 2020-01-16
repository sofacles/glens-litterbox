import React, {Component} from "react";
import { connect } from "react-redux";
import "./App.css";

class App extends Component{

  constructor(props) {
    super(props);
    this.setToGreen = this.setToGreen.bind(this);
  }
   
  light = {
    width: "30px",
    height: "28px",
    borderRadius: "50%",
    border: "1px black solid",
    backgroundColor: "#000",
    marginBottom: "10px"
  };

  red = {
    backgroundColor: "#f00"
  };

  green = {
    backgroundColor: "#0f0"
  };


  setToGreen() {
    this.props.makeGreen();
  }

  render() {
    return (
      <div className="App">
        
        <div style={Object.assign({}, this.light, this.props.red ? this.red : {}) }></div>
        <div style={this.light}></div>
        <div style={Object.assign({}, this.light, this.props.green ? this.green : {}) }></div>
        <div style={{marginTop: "50px"}}>
          <button onClick={this.setToGreen}>Make Green</button>
        </div>
      </div>
    );
  }
  
};
const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    makeGreen: () => {
      dispatch({ type: "MAKE_GREEN" });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import axios from "axios";

const MakeGreen = () => {
    return {type: "MAKE_GREEN"};
}

const FetchColors = () => {
    return function(dispatch) {
        axios.get("/api/healthcheck")
        .then( (response) => {
            debugger;
            dispatch({type: "COLORS_AVAILABLE", payload: response.data.colors})
        }, (error) => {
            debugger;
            dispatch({type: "NETWORK_ERROR", payload: error})
        });
    }
    
      
};

export {
    MakeGreen, 
    FetchColors
};
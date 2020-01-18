import axios from "axios";

const MakeGreen = () => {
  return { type: "MAKE_GREEN" };
};

const SetLoading = () => {
  return { type: "SET_LOADING" };
};

const FetchColors = () => {
  return function(dispatch) {
    window.setTimeout(() => {
      axios.get("/api/healthcheck").then(
        response => {
          debugger;
          dispatch({ type: "COLORS_AVAILABLE", payload: response.data.colors });
        },
        error => {
          debugger;
          dispatch({ type: "NETWORK_ERROR", payload: error });
        }
      );
    }, 2000);
  };
};

export { MakeGreen, FetchColors, SetLoading };

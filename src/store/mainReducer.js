const defaultState = {
  red: true,
  yellow: false,
  green: false,
  loading: false
};
const MainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "MAKE_GREEN":
      return {
        red: false,
        yellow: false,
        green: true,
        loading: false
      };
    case "COLORS_AVAILABLE":
      return {
        ...state,
        colors: action.payload,
        loading: false
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default MainReducer;

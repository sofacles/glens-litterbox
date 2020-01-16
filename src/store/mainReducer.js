const defaultState = {
    red: true,
    yellow: false,
    green: false
}
const MainReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "MAKE_GREEN": 
            return {
                red: false,
                yellow: false,
                green: true
            }
        default:
        return state;
    }
}

export default MainReducer;
import indexAction from "../actions/index.action"

const initState = {
    loading: false
}

const indexReducer = (state = initState, action) => {
    switch (action.type) {
        case indexAction.SOMEACTION:
            return state;
        case '1':
            return state;
        default:
            return state;
    }
}

export default indexReducer;
import goivipsuperchinese from "../actions/goi-vip-superchines.action"

const initState = {
    loading: false
}

const goivipsuperchineseReducer = (state = initState, action) => {
    switch (action.type) {
        case goivipsuperchinese.SOMEACTION:
            return state;
        case '1':
            return state;
        default:
            return state;
    }
}

export default goivipsuperchineseReducer;
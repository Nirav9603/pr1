import { ERRORUSERDATA, GETUSERDATA, SUCCESSUSERDATA } from "../Constent";

const initState = {
    data: [],
    error: ''
}

export const getUData = (state = initState, action) => {
    if (action.type === GETUSERDATA) {
        return { ...state }
    }
    if (action.type === SUCCESSUSERDATA) {
        const data = action.payload
        return { ...state, data }
    }
    if (action.type === ERRORUSERDATA) {
        const error = action.payload
        return { ...state, error }
    }

    return state;
}


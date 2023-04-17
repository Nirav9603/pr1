import { ADDDATA, DELETEDATA, EDITDATA } from "../Constent";

const initState = {
    data : []
};


export const userData = (state = initState, action) => {
    if (action.type === ADDDATA) {
        const data = state.data
        data.push(action.payload)
        return {...state, data}
    }

    if (action.type === DELETEDATA) {
        const data = state.data;
        return {...state, data}
    }

    if (action.type === EDITDATA) {
        const data = state.data.map((i)=>{
            if(i.id === action.payload.id){
                i = action.payload
            }
            return i 
        })
        return {...state, data}
    }

    return state
}

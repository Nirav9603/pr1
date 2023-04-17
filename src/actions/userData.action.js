import { ADDDATA, DELETEDATA, EDITDATA } from "../Constent";

export const AddData = (data) => async (dispatch) => {
    return{
        type: ADDDATA,
        payload: data
    }
}

export const DeleteData = (data) => {
    return{
        type: DELETEDATA,
        payload: data
    }
}

export const EditData = (data) => {
    return{
        type: EDITDATA,
        payload: data
    }
}

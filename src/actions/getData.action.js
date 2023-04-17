import { ERRORUSERDATA, GETUSERDATA, SUCCESSUSERDATA } from "../Constent"

export const getUData = () => async (dispatch) => {
    try {
        dispatch({ type: GETUSERDATA })
        const data = await fetch('http://localhost:3000/user')
            .then(res => res.json()).then(res => res).catch((error) => {
                dispatch({ type: ERRORUSERDATA, payload: new Error(error).message })
            })

        dispatch({ type: SUCCESSUSERDATA, payload: data })

    } catch (error) {

        dispatch({ type: ERRORUSERDATA, payload: new Error(error).message })
    }
}


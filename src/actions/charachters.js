import {
    CHARACHTER_LOADING,
    CHARACHTER_ERROR,
    GET_CHARACHTER
} from "./types";
import api from "../utils/backendinstance"

export const get_Charachters = (params) => async (dispatch) => {
    dispatch({type: CHARACHTER_LOADING})

    try {
        const res = await api.get(`v1/public/characters?ts=1&apikey=26ce5135286b7fef03ae761aebb917b8&hash=a115e0e42f6980f4469579685e9b073a&${params.toString()}`)
        dispatch({
            type: GET_CHARACHTER,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: CHARACHTER_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status},
        });
    }


}
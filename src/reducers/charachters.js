import {
    CHARACHTER_LOADING,
    CHARACHTER_ERROR,
    GET_CHARACHTER
} from "../actions/types";

const initialState = {
    C: [],
    loading: true,
    error: {}
};

 function CharachterReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
      case CHARACHTER_LOADING:
          return {
              loading: true
          }
      case CHARACHTER_ERROR :
          return {
              loading: false,
              error: payload
          }
      case GET_CHARACHTER:
          return {
              ...state,
              C: payload.data.results,
              loading: false
          }
    default:
      return state;
  }
}
export default CharachterReducer
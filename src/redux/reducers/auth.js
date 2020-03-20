import { AUTH_PERSIST, GET_OPEN_MODE } from "../actions/auth";


const initialState = {
  token: null,
  mode: ""
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_PERSIST:
      return {
        ...state,
        token: action.payload.token
      };
    case GET_OPEN_MODE:
      return {
        ...state,
        mode: action.payload.mode
      };
   
    default:
      return state;
  }
}

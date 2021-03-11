import { LOGIN, LOGOUT } from "../actions/auth";
export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLogged: true };
    case LOGOUT:
      return { ...state, isLogged: false };
    default:
      return state;
  }
};

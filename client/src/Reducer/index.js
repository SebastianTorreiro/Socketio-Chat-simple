import {
  GET_USER_REGISTERED,
  GET_USER_LOGIN,
  SET_ERROR_TRUE,
} from "../Actions/constantes.js";

const initialState = {
  user: null,
  error: "",
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_REGISTERED: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case GET_USER_LOGIN: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case SET_ERROR_TRUE: {
      return {
        ...state,
        error: action.payload.response.data.error,
      };
    }
    default:
      return { ...state };
  }
}

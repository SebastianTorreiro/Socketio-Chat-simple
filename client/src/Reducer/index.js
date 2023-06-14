import {
  CREATE_USER,
  REGISTER_USER,
  SET_ERROR_TRUE,
} from "../Actions/constantes.js";

const initialState = {
  user: null,
  error: "",
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case REGISTER_USER: {
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

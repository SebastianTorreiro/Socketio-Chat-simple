import { CREATE_USER, SET_ERROR_TRUE, REGISTER_USER  } from "./constantes.js";
import axios from 'axios'

const API = process.env.REACT_APP_API


export function createUser(input) {
  return async function (dispatch) {
    console.log(input, API)
    // try {
          const res = await axios
            .post(API + "/auth/singup", input);
          dispatch({ type: CREATE_USER, payload: res.data });

    //   } catch (error) {
            // console.log(error);
    //   }
  };
}

export function registerUser(input) {
    return async function (dispatch) {
      console.log(input, API)
        // try {
            const res = await axios
                .post(API + "/auth/login", input);
            dispatch({ type: REGISTER_USER, payload: res.data });
    //     } catch (error) {
    //         return dispatch({type: SET_ERROR_TRUE, payload: error})
    //     }
    };
  }



import { GET_USER_REGISTERED, SET_ERROR_TRUE, GET_USER_LOGIN  } from "./constantes.js";
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const API = process.env.REACT_APP_API


export function getUserRegistered(input) {
  return async function (dispatch) {
    const history = useNavigate()
    console.log(input, API)
    try {
          const res = await axios
              .post(API + "/user/singup", input);
          dispatch({ type: GET_USER_REGISTERED, payload: res.data });
          history('/chat')

      } catch (error) {
          console.log(error);
      }
  };
}

export function getUserLogin(input) {
    return async function (dispatch) {
      console.log(input, API)
      try {
            const res = await axios
                .post(API + "/user/login", input);
            dispatch({ type: GET_USER_LOGIN, payload: res.data });
        } catch (error) {
            return dispatch({type: SET_ERROR_TRUE, payload: error})
        }
    };
  }



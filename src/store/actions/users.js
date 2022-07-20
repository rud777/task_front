export const ADD_USER_REQUEST = 'ADD_USER_REQUEST';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAIL = 'ADD_USER_FAIL';

export function registerRequest(formData, cb) {
  return {
    type: ADD_USER_REQUEST,
    payload: { formData, cb }
  }
}



export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

export function loginRequest(formData, cb) {

  return {
    type: LOGIN_USER_REQUEST,
    payload: { formData, cb }
  }
}

export const LOG_OUT = 'LOG_OUT';

export function logOut() {
  return {
    type: LOG_OUT,
    payload: {}
  }
}



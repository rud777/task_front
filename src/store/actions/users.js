export const ADD_USER_REQUEST = 'ADD_USER_REQUEST';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAIL = 'ADD_USER_FAIL';

export function registerRequest(formData, cb) {
  return {
    type: ADD_USER_REQUEST,
    payload: { formData, cb }
  }
}

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAIL = 'UPDATE_USER_FAIL';

export function updateRequest(formData, cb) {

  return {
    type: UPDATE_USER_REQUEST,
    payload: { formData, cb }
  }
}
export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAIL = 'DELETE_USER_FAIL';

export function deleteRequest(id) {
  return {
    type: UPDATE_USER_REQUEST,
    payload: { id }
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


export const MY_ACCOUNT_REQUEST = 'MY_ACCOUNT_REQUEST';
export const MY_ACCOUNT_SUCCESS = 'MY_ACCOUNT_SUCCESS';
export const MY_ACCOUNT_FAIL = 'MY_ACCOUNT_FAIL';

export function myAccountRequest() {
  return {
    type: MY_ACCOUNT_REQUEST,
    payload: {}
  }
}

export const GET_USERS_LIST_REQUEST = 'GET_USERS_LIST_REQUEST';
export const GET_USERS_LIST_SUCCESS = 'GET_USERS_LIST_SUCCESS';
export const GET_USERS_LIST_FAIL = 'GET_USERS_LIST_FAIL';

export function getUsersListRequest(s = '') {
  return {
    type: GET_USERS_LIST_REQUEST,
    payload: { s }
  }
}

export const GET_USER_ACCOUNT_REQUEST = 'GET_USER_ACCOUNT_REQUEST';
export const GET_USER_ACCOUNT_SUCCESS = 'GET_USER_ACCOUNT_SUCCESS';
export const GET_USER_ACCOUNT_FAIL = 'GET_USER_ACCOUNT_FAIL';

export function getAccountRequest(userId) {
  return {
    type: GET_USER_ACCOUNT_REQUEST,
    payload: { userId }
  }
}


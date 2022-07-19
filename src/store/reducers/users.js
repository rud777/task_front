import {
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  ADD_USER_FAIL,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  LOG_OUT,
  GET_USERS_LIST_REQUEST,
  GET_USERS_LIST_SUCCESS,
  GET_USERS_LIST_FAIL,
  GET_USER_ACCOUNT_REQUEST, GET_USER_ACCOUNT_FAIL, GET_USER_ACCOUNT_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
} from "../actions/users";
import Account from "../../services/Account";
import _ from 'lodash'

const initialState = {
  token: Account.getToken(),
  account: Account.get(),
  messages: [],
  usersList: [],
  usersListRequestStatus: '',
  onlineUsers: [],
  typingUsers: {},
}

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case ADD_USER_SUCCESS: {

      return {
        ...state,
        formData: action.payload
      }
    }
    case ADD_USER_FAIL: {

      return {
        ...state,
      }
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        formData: action.payload
      }
    }
    case UPDATE_USER_FAIL: {

      return {
        ...state,
      }
    }
    case DELETE_USER_SUCCESS: {

      return {
        ...state,
        id: action.payload
      }
    }
    case DELETE_USER_FAIL: {

      return {
        ...state,
      }
    }
    case LOGIN_USER_REQUEST: {
      return {
        ...state,
      }
    }
    case LOGIN_USER_SUCCESS: {
      const { token, user } = action.payload;
      return {
        ...state,
        token,
        account: user,
      }
    }
    case LOGIN_USER_FAIL: {
      return {
        ...state,
      }
    }
    case LOG_OUT: {
      Account.delete();
      return {
        ...state,
        token: '',
        account: {},
      }
    }
    case GET_USERS_LIST_REQUEST: {
      return {
        ...state,
        usersListRequestStatus: 'request'
      }
    }
    case GET_USERS_LIST_SUCCESS: {
      return {
        ...state,
        usersList: action.payload.users,
        usersListRequestStatus: 'success'
      }
    }
    case GET_USERS_LIST_FAIL: {
      return {
        ...state,
        usersListRequestStatus: 'fail'
      }
    }
    default: {
      return state
    }
  }
}

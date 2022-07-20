import {
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  LOG_OUT,
} from "../actions/users";
import Account from "../../services/Account";

const initialState = {
  token: Account.getToken(),
  account: Account.get(),

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
    default: {
      return state
    }
  }
}

import { combineReducers } from "redux";
import users from './users';
import project from './project'
import taskes from './taskes'

export default combineReducers({
  users,project,taskes
})

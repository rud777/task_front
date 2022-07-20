import { all, fork } from 'redux-saga/effects'
import users from './users';
import project from './project'

export default function* watchers() {

  yield all([
    users,
      project,
  ].map(fork))

}

import { all, fork } from 'redux-saga/effects'
import users from './users';
import project from './project'
import taskes from './taskes'

export default function* watchers() {

  yield all([
    users,
      project,
      taskes,
  ].map(fork))

}

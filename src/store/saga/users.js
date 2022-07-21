import {takeLatest, call, put} from 'redux-saga/effects'
import {
    ADD_USER_FAIL,
    ADD_USER_REQUEST,
    ADD_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
} from "../actions/users";
import Api from "../../Api";
import 'react-toastify/dist/ReactToastify.css';
import Account from "../../services/Account";

export default function* watcher() {
    yield takeLatest(ADD_USER_REQUEST, handleAddUser);
    yield takeLatest(LOGIN_USER_REQUEST, handleLoginUser);

}

function* handleAddUser(action) {
    try {
        const {formData} = action.payload;
        console.log(formData)
        const {data} = yield call(Api.register, formData);

        yield put({
            type: ADD_USER_SUCCESS,
            payload: data
        })

        if (action.payload.cb) {
            action.payload.cb(null, data)
        }
    } catch (e) {
        console.error(e)
        yield put({
            type: ADD_USER_FAIL,
            message: e.message,
            payload: e.response?.data || {}
        });
        if (action.payload.cb) {
            action.payload.cb(e.response?.data, null)
        }
    }
}

function* handleLoginUser(action) {
    try {
        const {formData} = action.payload;
        const {data} = yield call(Api.login, formData)


        yield put({
            type: LOGIN_USER_SUCCESS,
            payload: data,
        });

        Account.setToken(data.token);
        Account.set(data.user);
        if (action.payload.cb) {
            action.payload.cb(null, data)
        }
    } catch (e) {
        console.error(e)
        yield put({
            type: LOGIN_USER_FAIL,
            message: e.message,
            payload: e.response?.data || {}
        })
        if (action.payload.cb) {
            action.payload.cb(e.response?.data, null)
        }
    }
}


import {takeLatest, call, put} from 'redux-saga/effects'
import {
    ADD_USER_FAIL,
    ADD_USER_REQUEST,
    ADD_USER_SUCCESS,
    GET_USER_ACCOUNT_FAIL,
    GET_USER_ACCOUNT_REQUEST, GET_USER_ACCOUNT_SUCCESS,
    GET_USERS_LIST_FAIL,
    GET_USERS_LIST_REQUEST,
    GET_USERS_LIST_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    MY_ACCOUNT_FAIL,
    MY_ACCOUNT_REQUEST,
    MY_ACCOUNT_SUCCESS,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL
} from "../actions/users";
import Api from "../../Api";
import 'react-toastify/dist/ReactToastify.css';
import Account from "../../services/Account";

export default function* watcher() {
    yield takeLatest(ADD_USER_REQUEST, handleAddUser);
    yield takeLatest(UPDATE_USER_REQUEST, handleUpdateUser);
    yield takeLatest(DELETE_USER_REQUEST, deleteUpdateUser);
    yield takeLatest(LOGIN_USER_REQUEST, handleLoginUser);
    yield takeLatest(MY_ACCOUNT_REQUEST, handleMyAccount);
    yield takeLatest(GET_USERS_LIST_REQUEST, handleUsersRequest);
    yield takeLatest(GET_USER_ACCOUNT_REQUEST, handleUserAccountRequest);
}

function* handleUserAccountRequest(action) {
    try {
        const {userId} = action.payload;
        const {data} = yield call(Api.getAccount, userId);

        yield put({
            type: GET_USER_ACCOUNT_SUCCESS,
            payload: data
        })
    } catch (e) {
        console.warn(e)
        yield put({
            type: GET_USER_ACCOUNT_FAIL,
            message: e.message,
            payload: e.response.data,
        });
    }
}

function* handleUsersRequest(action) {
    try {
        const {s} = action.payload;
        const {data} = yield call(Api.getUsersList, s);

        yield put({
            type: GET_USERS_LIST_SUCCESS,
            payload: data
        })
    } catch (e) {
        console.warn(e.response)
        yield put({
            type: GET_USERS_LIST_FAIL,
            message: e.message,
            payload: e.response.data,
        });
    }
}

function* handleMyAccount(action) {
    try {
        const {data} = yield call(Api.myAccount);

        yield put({
            type: MY_ACCOUNT_SUCCESS,
            payload: data
        })
    } catch (e) {
        console.warn(e.response)
        yield put({
            type: MY_ACCOUNT_FAIL,
            message: e.message,
            payload: e.response.data,
        });
    }
}

function* handleUpdateUser(action) {
    try {
        const {formData} = action.payload;
        const {data} = yield call(Api.userUpdate, formData);
        console.log(data)
        yield put({
            type: UPDATE_USER_SUCCESS,
            payload: data
        })
        // Account.setToken(data.token);
        Account.set(data.user);
        if (action.payload.cb) {
            action.payload.cb(null, data)
        }
    } catch (e) {
        console.error(e)
        yield put({
            type: UPDATE_USER_FAIL,
            message: e.message,
            payload: e.response?.data || {}
        });
        if (action.payload.cb) {
            action.payload.cb(e.response?.data, null)
        }
    }
}
function* deleteUpdateUser(action) {
    try {
        const {id} = action.payload;
        const {data} = yield call(Api.userDelete, id);

        yield put({
            type: DELETE_USER_SUCCESS,
            payload: data
        })

        if (action.payload.cb) {
            action.payload.cb(null, data)
        }
    } catch (e) {
        console.error(e)
        yield put({
            type: DELETE_USER_FAIL,
            message: e.message,
            payload: e.response?.data || {}
        });
        if (action.payload.cb) {
            action.payload.cb(e.response?.data, null)
        }
    }
}
function* handleAddUser(action) {
    try {
        const {formData} = action.payload;
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


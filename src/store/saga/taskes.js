import {takeLatest, call, put} from 'redux-saga/effects'

import Api from "../../Api";
import 'react-toastify/dist/ReactToastify.css';
import {
    ADD_TASKES_FAIL,
    ADD_TASKES_REQUEST,
    ADD_TASKES_SUCCESS, GET_TASKES_LIST_FAIL,
    GET_TASKES_LIST_REQUEST,
    GET_TASKES_LIST_SUCCESS, UPDATE_TASKES_FAIL, UPDATE_TASKES_REQUEST, UPDATE_TASKES_SUCCESS
} from "../actions/taskes";
import {
    GET_PROJECT_LIST_FAIL,
    GET_PROJECT_LIST_REQUEST,
    GET_PROJECT_LIST_SUCCESS, UPDATE_PROJECT_FAIL, UPDATE_PROJECT_REQUEST,
    UPDATE_PROJECT_SUCCESS
} from "../actions/project";
export default function* watcher() {
    yield takeLatest(ADD_TASKES_REQUEST, handleAddTaskes);
    yield takeLatest(GET_TASKES_LIST_REQUEST, handleTaskesRequest);
    yield takeLatest(UPDATE_TASKES_REQUEST, handleUpdateTaskes);
}
function* handleAddTaskes(action) {
    try {
        const {formData} = action.payload;

        const {data} = yield call(Api.createTaskes, formData);

        yield put({
            type: ADD_TASKES_SUCCESS,
            payload: data
        })

        if (action.payload.cb) {
            action.payload.cb(null, data)
        }
    } catch (e) {
        console.error(e)
        yield put({
            type: ADD_TASKES_FAIL,
            message: e.message,
            payload: e.response?.data || {}
        });
        if (action.payload.cb) {
            action.payload.cb(e.response?.data, null)
        }
    }
}
function* handleTaskesRequest(action) {
    try {
        const { id } = action.payload;
        const { data } = yield call(Api.getTaskesList, id);

        yield put({
            type: GET_TASKES_LIST_SUCCESS,
            payload: data
        })
    } catch (e) {
        console.warn(e.response)
        yield put({
            type: GET_TASKES_LIST_FAIL,
            message: e.message,
            payload: e.response.data,
        });
    }
}
function* handleUpdateTaskes(action) {
    try {
        const {updateData} = action.payload;
        const {data} = yield call(Api.taskesUpdate, updateData);
        yield put({
            type: UPDATE_TASKES_SUCCESS,
            payload: data
        })

        if (action.payload.cb) {
            action.payload.cb(null, data)
        }
    } catch (e) {
        console.error(e)
        yield put({
            type: UPDATE_TASKES_FAIL,
            message: e.message,
            payload: e.response?.data || {}
        });
        if (action.payload.cb) {
            action.payload.cb(e.response?.data, null)
        }
    }
}

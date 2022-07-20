import {takeLatest, call, put} from 'redux-saga/effects'
import {
    GET_PROJECT_LIST_REQUEST,
    GET_PROJECT_LIST_SUCCESS,
    GET_PROJECT_LIST_FAIL,
    ADD_PROJECT_REQUEST,
    ADD_PROJECT_SUCCESS,
    ADD_PROJECT_FAIL,
    UPDATE_PROJECT_REQUEST,
    UPDATE_PROJECT_SUCCESS,
    UPDATE_PROJECT_FAIL,
    DELETE_PROJECT_REQUEST,
    DELETE_PROJECT_FAIL, DELETE_PROJECT_SUCCESS
} from "../actions/project";
import Api from "../../Api";
import 'react-toastify/dist/ReactToastify.css';
export default function* watcher() {
    yield takeLatest(ADD_PROJECT_REQUEST, handleAddProject);
    yield takeLatest(GET_PROJECT_LIST_REQUEST, handleProjectsRequest);
    yield takeLatest(UPDATE_PROJECT_REQUEST, handleUpdateProject);
    yield takeLatest(DELETE_PROJECT_REQUEST, hendeleDeleteProject);

}
function* handleAddProject(action) {
    try {
        const {formData} = action.payload;

        const {data} = yield call(Api.create, formData);

        yield put({
            type: ADD_PROJECT_SUCCESS,
            payload: data
        })

        if (action.payload.cb) {
            action.payload.cb(null, data)
        }
    } catch (e) {
        console.error(e)
        yield put({
            type: ADD_PROJECT_FAIL,
            message: e.message,
            payload: e.response?.data || {}
        });
        if (action.payload.cb) {
            action.payload.cb(e.response?.data, null)
        }
    }
}
function* handleProjectsRequest(action) {
    try {
        const { s } = action.payload;
        const { data } = yield call(Api.getProjectsList, s);

        yield put({
            type: GET_PROJECT_LIST_SUCCESS,
            payload: data
        })
    } catch (e) {
        console.warn(e.response)
        yield put({
            type: GET_PROJECT_LIST_FAIL,
            message: e.message,
            payload: e.response.data,
        });
    }
}
function* handleUpdateProject(action) {
    try {
        const {updateData} = action.payload;
        const {data} = yield call(Api.projectUpdate, updateData);
        yield put({
            type: UPDATE_PROJECT_SUCCESS,
            payload: data
        })

        if (action.payload.cb) {
            action.payload.cb(null, data)
        }
    } catch (e) {
        console.error(e)
        yield put({
            type: UPDATE_PROJECT_FAIL,
            message: e.message,
            payload: e.response?.data || {}
        });
        if (action.payload.cb) {
            action.payload.cb(e.response?.data, null)
        }
    }
}
function* hendeleDeleteProject(action) {
    try {
        const {id} = action.payload;
        console.log(id)
        const {data} = yield call(Api.projectDelete, id);

        yield put({
            type: DELETE_PROJECT_SUCCESS,
            payload: data
        })

        if (action.payload.cb) {
            action.payload.cb(null, data)
        }
    } catch (e) {
        console.error(e)
        yield put({
            type: DELETE_PROJECT_FAIL,
            message: e.message,
            payload: e.response?.data || {}
        });
        if (action.payload.cb) {
            action.payload.cb(e.response?.data, null)
        }
    }
}

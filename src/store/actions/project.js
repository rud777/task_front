export const GET_PROJECT_LIST_REQUEST = 'GET_PROJECT_LIST_REQUEST';
export const GET_PROJECT_LIST_SUCCESS = 'GET_PROJECT_LIST_SUCCESS';
export const GET_PROJECT_LIST_FAIL = 'GET_PROJECT_LIST_FAIL';

export function getProjectListRequest(s = '') {
    return {
        type: GET_PROJECT_LIST_REQUEST,
        payload: { s }
    }
}
export const ADD_PROJECT_REQUEST = 'ADD_PROJECT_REQUEST';
export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS';
export const ADD_PROJECT_FAIL = 'ADD_PROJECT_FAIL';

export function createProjectRequest(formData, cb) {
    return {
        type: ADD_PROJECT_REQUEST,
        payload: { formData, cb }
    }
}
export const UPDATE_PROJECT_REQUEST = 'UPDATE_PROJECT_REQUEST';
export const UPDATE_PROJECT_SUCCESS = 'UPDATE_PROJECT_SUCCESS';
export const UPDATE_PROJECT_FAIL = 'UPDATE_PROJECT_FAIL';

export function updateProjectRequest(updateData, cb) {

    return {
        type: UPDATE_PROJECT_REQUEST,
        payload: { updateData, cb }
    }
}
export const DELETE_PROJECT_REQUEST = 'DELETE_PROJECT_REQUEST';
export const DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS';
export const DELETE_PROJECT_FAIL = 'DELETE_PROJECT_FAIL';

export function deleteProjectRequest(id) {
    return {
        type: DELETE_PROJECT_REQUEST,
        payload: { id }
    }
}

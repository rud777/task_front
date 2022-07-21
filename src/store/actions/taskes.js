export const ADD_TASKES_REQUEST = 'ADD_TASKES_REQUEST';
export const ADD_TASKES_SUCCESS = 'ADD_TASKES_SUCCESS';
export const ADD_TASKES_FAIL = 'ADD_TASKES_FAIL';

export function createTaskesRequest(formData, cb) {
    return {
        type: ADD_TASKES_REQUEST,
        payload: { formData, cb }
    }
}
export const GET_TASKES_LIST_REQUEST = 'GET_TASKES_LIST_REQUEST';
export const GET_TASKES_LIST_SUCCESS = 'GET_TASKES_LIST_SUCCESS';
export const GET_TASKES_LIST_FAIL = 'GET_TASKES_LIST_FAIL';

export function getTaskesListRequest(id) {
    return {
        type: GET_TASKES_LIST_REQUEST,
        payload: {id}
    }
}
export const UPDATE_TASKES_REQUEST = 'UPDATE_TASKES_REQUEST';
export const UPDATE_TASKES_SUCCESS = 'UPDATE_TASKES_SUCCESS';
export const UPDATE_TASKES_FAIL = 'UPDATE_TASKES_FAIL';

export function updateTaskesRequest(updateData, cb) {

    return {
        type: UPDATE_TASKES_REQUEST,
        payload: { updateData, cb }
    }
}

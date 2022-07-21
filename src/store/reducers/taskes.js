
import {
    ADD_TASKES_FAIL,
    ADD_TASKES_SUCCESS,
    GET_TASKES_LIST_REQUEST,
    GET_TASKES_LIST_SUCCESS, UPDATE_TASKES_FAIL,
    UPDATE_TASKES_SUCCESS
} from "../actions/taskes";
import {UPDATE_PROJECT_FAIL, UPDATE_PROJECT_SUCCESS} from "../actions/project";


const initialState = {
    taskesList: [],
    taskesListRequestStatus: '',

}

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case ADD_TASKES_SUCCESS: {

            return {
                ...state,
                formData: action.payload
            }
        }
        case ADD_TASKES_FAIL: {

            return {
                ...state,
            }
        }
        case GET_TASKES_LIST_REQUEST: {
            return {
                ...state,
                taskesListRequestStatus: 'request'
            }
        }
        case GET_TASKES_LIST_SUCCESS: {
            return {
                ...state,
                taskesList: action.payload.taskes,
                projectListRequestStatus: 'success'
            }
        }
        case UPDATE_TASKES_SUCCESS: {
            return {
                ...state,
                updateData: action.payload
            }
        }
        case UPDATE_TASKES_FAIL: {

            return {
                ...state,
            }
        }
        default: {
            return state
        }
    }
}

import {
    ADD_PROJECT_FAIL,
    ADD_PROJECT_SUCCESS, DELETE_PROJECT_FAIL, DELETE_PROJECT_SUCCESS,
    GET_PROJECT_LIST_FAIL,
    GET_PROJECT_LIST_REQUEST,
    GET_PROJECT_LIST_SUCCESS, UPDATE_PROJECT_FAIL, UPDATE_PROJECT_SUCCESS
} from "../actions/project";


const initialState = {
    projectList: [],
    projectListRequestStatus: '',

}

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case GET_PROJECT_LIST_REQUEST: {
            return {
                ...state,
                projectListRequestStatus: 'request'
            }
        }
        case GET_PROJECT_LIST_SUCCESS: {
            return {
                ...state,
                projectList: action.payload.project,
                projectListRequestStatus: 'success'
            }
        }
        case GET_PROJECT_LIST_FAIL: {
            return {
                ...state,
                projectListRequestStatus: 'fail'
            }
        }
        case ADD_PROJECT_SUCCESS: {

            return {
                ...state,
                formData: action.payload
            }
        }
        case ADD_PROJECT_FAIL: {

            return {
                ...state,
            }
        }
        case UPDATE_PROJECT_SUCCESS: {
            return {
                ...state,
                updateData: action.payload
            }
        }
        case UPDATE_PROJECT_FAIL: {

            return {
                ...state,
            }
        }
        case DELETE_PROJECT_SUCCESS: {

            return {
                ...state,
                id: action.payload
            }
        }
        case DELETE_PROJECT_FAIL: {

            return {
                ...state,
            }
        }
        default: {
            return state
        }
    }
}

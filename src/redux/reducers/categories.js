import {
    CATEGORIES_REQUEST,
    CATEGORIES_SUCCESS,
    CATEGORIES_FAIL,
} from '../actions/CategoriesActions'

const initialState = {
    isLoading: false,
    categories: [],
    message: ''
}

export function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case CATEGORIES_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case CATEGORIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categories: action.payload
            }
        case CATEGORIES_FAIL:
            return {
                ...state,
                isLoading: false,
                message: action.payload.message
            }
        default:
            return state
    }
}
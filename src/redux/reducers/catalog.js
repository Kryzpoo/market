import {
    CATALOG_REQUEST,
    CATALOG_SUCCESS,
    CATALOG_FAIL,
} from '../actions/CatalogActions'

const initialState = {
    isLoading: false,
    productsCount: 0,
    products: [],
    message: ''
}

export function catalogReducer(state = initialState, action) {
    switch (action.type) {
        case CATALOG_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case CATALOG_SUCCESS:
            return {
                ...state,
                isLoading: false,
                productsCount: action.payload.count,
                products: action.payload.data
            }

        case CATALOG_FAIL:
            return {
                ...state,
                isLoading: false,
                message: action.payload.message
            }

        default:
            return state
    }
}
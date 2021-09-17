export const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST'
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS'
export const CATEGORIES_FAIL = 'CATEGORIES_FAIL'

export function handleGetCategories() {
    return function(dispatch) {
        dispatch({type: CATEGORIES_REQUEST})
        fetch('http://localhost:3000/test-data/categories.json')
            .then(response => {
                return response.json()
            })
            .then(data => {
                dispatch({
                    type: CATEGORIES_SUCCESS,
                    payload: data
                })
            })
            .catch(reason => {
                dispatch({
                    type: CATEGORIES_FAIL,
                    payload: new Error(reason.toString())
                })
            })
    }
}
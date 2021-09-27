export const CATALOG_REQUEST = 'CATALOG_REQUEST'
export const CATALOG_SUCCESS = 'CATALOG_SUCCESS'
export const CATALOG_FAIL = 'CATALOG_FAIL'

export function handleGetProducts(category) {
    return function(dispatch) {
        dispatch({
            type: CATALOG_REQUEST
        })

        const url = !Boolean(category) ?
            'http://localhost:3000/test-data/products_recommendations.json'
            : `http://localhost:3000/test-data/products_c${category}.json`

        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                dispatch({
                    type: CATALOG_SUCCESS,
                    payload: data
                })
            })
            .catch(reason => {
                dispatch({
                    type: CATALOG_FAIL,
                    payload: new Error(reason.toString())
                })
            })
    }
}
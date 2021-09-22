export const CATALOG_REQUEST = 'CATALOG_REQUEST'
export const CATALOG_SUCCESS = 'CATALOG_SUCCESS'
export const CATALOG_FAIL = 'CATALOG_FAIL'

export function handleGetCatalog() {
    return function(dispatch) {
        dispatch({
            type: CATALOG_REQUEST
        })

        fetch('http://localhost:3000/test-data/products.json')
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
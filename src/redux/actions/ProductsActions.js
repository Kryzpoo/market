export const CATALOG_REQUEST = 'CATALOG_REQUEST'
export const CATALOG_SUCCESS = 'CATALOG_SUCCESS'
export const CATALOG_FAIL = 'CATALOG_FAIL'

export function handleGetProducts({category = null, page = 1}) {
    return function(dispatch) {
        dispatch({
            type: CATALOG_REQUEST
        })

        let url
        if (category) {
            url = `http://localhost:3000/test-data/products_c${category}p${page}.json`
        } else {
            url = 'http://localhost:3000/test-data/products_recommendations.json'
        }

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
                console.log('ERROR', reason)
                dispatch({
                    type: CATALOG_FAIL,
                    payload: new Error(reason.toString())
                })
            })
    }
}
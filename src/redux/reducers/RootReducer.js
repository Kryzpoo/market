import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import {productsReducer} from './ProductsReducer'
import {categoriesReducer} from './CategoriesReducer'

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    products: productsReducer,
    categories: categoriesReducer,
})

export {createRootReducer}
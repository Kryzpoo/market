import { combineReducers } from 'redux'
import { productsReducer } from './ProductsReducer'
import { categoriesReducer } from './CategoriesReducer'

export const rootReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
})
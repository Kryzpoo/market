import { combineReducers } from 'redux'
import { catalogReducer } from './catalog'
import { categoriesReducer } from './categories'

export const rootReducer = combineReducers({
    catalog: catalogReducer,
    categories: categoriesReducer,
})
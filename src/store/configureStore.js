import {applyMiddleware, compose, createStore} from 'redux'
import {routerMiddleware} from 'connected-react-router'
import {createRootReducer} from '../redux/reducers/RootReducer'
import thunk from 'redux-thunk'
import {createBrowserHistory} from "history";

export const history = createBrowserHistory()

function configureStore(preloadedState) {
    return createStore(
        createRootReducer(history), // root reducer with router state
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions
                thunk,
                // ... other middlewares ...
            ),
        ),
    )
}

export default configureStore

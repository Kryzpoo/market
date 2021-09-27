import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import App from './components/App';
import store from './store/configureStore'
import reportWebVitals from './reportWebVitals';
import './index.css';
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";

const history = createBrowserHistory()

ReactDOM.render(
    <Router history={history}>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

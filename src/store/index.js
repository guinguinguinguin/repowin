import { createStore, applyMiddleware, compose } from "redux";
import combinedReducer from "../reducers/combinedReducer";
import thunk from 'redux-thunk';
// const thunk = require('redux-thunk').default


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combinedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;

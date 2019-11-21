//import * as reduxModule from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import createReducer from './reducers';
import thunk from 'redux-thunk';

/*
Fix for Firefox redux dev tools extension
https://github.com/zalmoxisus/redux-devtools-instrument/pull/19#issuecomment-400637274
 */
//reduxModule.__DO_NOT_USE__ActionTypes.REPLACE = '@@redux/INIT';

// const composeEnhancers =
//     process.env.NODE_ENV !== 'production' &&
//     typeof window === 'object' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//             // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//         }) : compose;

// const enhancer = composeEnhancers(
//     applyMiddleware(thunk)
// );

// const logger = store => next => action => {
//     console.log("dispatching", action);
//     console.log("current state", store.getState());
//     const result = next(action);
//     console.log("next state", store.getState());
//     return result;
// }

// const async = store => next => action => {
//     if (typeof action === "function") {
//         return action(store.dispatch);
//     }

//     return next(action);
// }



const store = createStore(createReducer());//, enhancer);
//const store = createStore(createReducer(), applyMiddleware(async, logger));


store.asyncReducers = {};

export const injectReducer = (key, reducer) => {
    if ( store.asyncReducers[key] )
    {
        return;
    }
    store.asyncReducers[key] = reducer;
    store.replaceReducer(createReducer(store.asyncReducers));
    return store;
};



export default store;

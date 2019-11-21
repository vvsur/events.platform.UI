import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducers'


export const initStore = (initialState = {}) => {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
}


// const initialState = {
//   lastUpdate: 0,
//   light: false,
//   count: 0,
//   page: null,
// }

// const reducer = (state = initialState, action) => {
//   switch (action.type) {


//     case 'GET_PAGE':
//       {
//           //console.log("Actions.GET_PAGE", action);
//           return {
//             ...state,
//             page: action.payload
//           };
//       }



//     case 'TICK':
//       return {
//         ...state,
//         lastUpdate: action.lastUpdate,
//         light: !!action.light
//       }
//     case 'INCREMENT':
//       return {
//         ...state,
//         count: state.count + 1
//       }
//     case 'DECREMENT':
//       return {
//         ...state,
//         count: state.count - 1
//       }
//     case 'RESET':
//       return {
//         ...state,
//         count: initialState.count
//       }
//     default:
//       return state
//   }
// }

// export const initializeStore = (preloadedState = initialState) => {
//   return createStore(
//     reducer,
//     preloadedState,
//     composeWithDevTools(applyMiddleware())
//   )
// }

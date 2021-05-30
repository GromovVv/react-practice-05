import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import todosReducer from '../redux/todos/todos-reducer'
import counterReducer from "./counter/counter-reducer"

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;



// const initialState = {
//   counter: {
//     value: 10,
//     step: 5,
//   },
// };

// const reducer = (state = initialState, action) => {

// const reducer = (state = initialState, { type, payload }) => {
//   // console.log("Log of action", action);
//   switch (type) {
//     case 'counter/Increment':
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value + payload,
//         },
//       };

//     case 'counter/Decrement':
//       return {
//         ...state,
//         counter: {
//           ...state.conter,
//           value: state.counter.value - payload,
//         },
//       };

//     default:
//       return state;
//   }
// };

// const counterInitialState = {
//   value: 10,
//   step: 5,
// };

// const valueReducer = (state = 10, { type, payload }) => {
//   switch (type) {
//     case 'counter/Increment':
//       return state + payload;

//     case 'counter/Decrement':
//       return state - payload;

//     default:
//       return state;
//   }
// };

// const stepReducer = (state = 5, action) => state;

// const counterReducer = combineReducers({
//   value: valueReducer,
//   step: stepReducer,
// });

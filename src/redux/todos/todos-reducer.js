import { combineReducers } from 'redux';
import todosTypes from './todos-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case todosTypes.ADD:
     return [...state, payload];

    case todosTypes.DELETE:
        return state.filter(todo => todo.id !== payload)

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
    switch (type) {
        case todosTypes.CHANGE_FILTER:
         return payload;
    
        default:
          return state;
    }
};

export default combineReducers({
  items,
  filter,
});

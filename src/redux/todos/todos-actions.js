/* eslint-disable import/no-anonymous-default-export */
import typesTodo from './todos-types';
import shortid from 'shortid'

const addTodo = (text) => ({
    type: typesTodo.ADD,
    payload: {
        id: shortid.generate(),
        text,
        completed: false,
    }
});

const deleteTodo = todoId => ({
    type: typesTodo.DELETE,
    payload: todoId
})

const changeFilter = value => ({
    type: typesTodo.CHANGE_FILTER,
    payload: value,
})

export default { addTodo, deleteTodo, changeFilter }
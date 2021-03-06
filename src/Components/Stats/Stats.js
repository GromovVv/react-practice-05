import React from 'react';
import { connect } from 'react-redux';

import './Stats.scss';

const Stats = ({ total, completed }) => (
  <div className="Stats">
    <p className="Stats__item">
      <span className="Stats__value">{total}</span>
      <span className="Stats__label">Всего</span>
    </p>
    <p className="Stats__item">
      <span className="Stats__value">{completed}</span>
      <span className="Stats__label">Выполнено</span>
    </p>
  </div>
);
// const totalTodoCount = todos.length;
// const completedTodoCount = this.calculateCompletedTodos();

const getCompletedTodosCount = todos =>
  todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);

const mapStateToProps = state => ({
  total: state.todos.items.length,
  completed: getCompletedTodosCount(state.todos.items),
});

export default connect(mapStateToProps)(Stats);

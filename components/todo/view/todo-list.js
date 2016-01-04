import React from 'React';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import TodoItem from './todo-item';

const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo =>
      <TodoItem
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);

const getTodosByFilter = (
  todos,
  filter
) => {

  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
};

const mapStateToProps = (
  state, ownProps
) => {
  return {
    todos: getTodosByFilter(
      state.todos,
      state.visibilityFilter
    )
  }
};

const mapDispatchToProps = (
  dispatch, ownProps
) => {
  return {
    onTodoClick: (id) => {
      dispatch({
        type: 'TOGGLE_TODO',
        id
      });
    }
  }
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
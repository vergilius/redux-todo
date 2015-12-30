import React from 'React';
import ReactDOM from 'react-dom';

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

export default TodoList;
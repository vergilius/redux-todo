import React from 'React';
import ReactDOM from 'react-dom';

const TodoItem = ({
  onClick,
  completed,
  text
}) => (
  <li
    onClick={onClick}
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
  >
    {text}
  </li>
);

export default TodoItem;
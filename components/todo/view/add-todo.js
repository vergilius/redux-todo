import React from 'React';
import ReactDOM from 'react-dom';

import TodoItem from './todo-item';

const AddTodo = ({
  onAddAction
}) => {
  let input;

  return (
    <div>
      <input ref={node => {
          input = node;
        }} />
      <button onClick={() => {
          onAddAction(input.value);
          input.value = '';
        }}>
      add todo
      </button>
    </div>
  )
};

export default AddTodo;
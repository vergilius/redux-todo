import React from 'React';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import TodoItem from './todo-item';

const generateRandomId = () => (
  Math.random().toString(36).substring(2).toUpperCase()
);

let AddTodo = ({
  dispatch
}) => {
  let input;

  return (
    <div>
      <input ref={node => {
          input = node;
        }} />
      <button onClick={() => {
          dispatch({
            type: 'ADD_TODO',
            text: input.value,
            id: generateRandomId()
          });
          input.value = '';
        }}>
      add todo
      </button>
    </div>
  )
};

export default connect()(AddTodo);
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
      <input
        className="mint-input mint-input--spaced mint-input--full"
        placeholder="Type what you need to do"
        ref={node => {
          input = node;
        }} />
      <button
        className="mint-button-primary add-button"
        onClick={() => {
          dispatch({
            type: 'ADD_TODO',
            text: input.value,
            id: generateRandomId()
          });
          input.value = '';
        }}>
        <div className="mint-button-primary__hole">
          <svg className="mint-icon mint-icon--x20">
            <use xlinkHref="#icon-plus"></use>
          </svg>
        </div>
      </button>
    </div>
  );
};

export default connect()(AddTodo);
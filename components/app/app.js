import React from 'React';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'Redux';

import todos from './../todo/todos';
import visibilityFilter from './../filter/filter';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const store = createStore(todoApp);

import TodoApp from './view/todo-app';


const onFilterClick = (filter) => {
  store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter
  });
};

let nextId = 0;
const onAddTodoAction = (text) => {
  store.dispatch({
    type: 'ADD_TODO',
    text: text,
    id: nextId++
  });
};

const onTodoClick = (id) => {
  store.dispatch({
    type: 'TOGGLE_TODO',
    id
  });
};

const render = () => {
  ReactDOM.render(
    <TodoApp
      {...store.getState()}
      onFilterClick={onFilterClick}
      onAddTodoAction={onAddTodoAction}
      onTodoClick={onTodoClick}
    />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();

export default null;
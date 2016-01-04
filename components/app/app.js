import React from 'React';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'Redux';
import { Provider } from 'react-redux';

import todos from './../todo/todos';
import visibilityFilter from './../filter/filter';

const store = createStore(combineReducers({
  todos,
  visibilityFilter
}));

import TodoApp from './view/todo-app';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <TodoApp />
    </Provider>,
    document.getElementById('root')
  );
};

render();

export default null;
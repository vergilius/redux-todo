import todos from './todo/todos';
import visibilityFilter from './filter/filter';

import { createStore, combineReducers } from 'Redux';
import React from 'React';
import ReactDOM from 'react-dom';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const store = createStore(todoApp);

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <button>
          test
        </button>
      </div>
    );

  }
}

const render = () => {
  ReactDOM.render(
    <TodoApp />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
console.log('DONE');
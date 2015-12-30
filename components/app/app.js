import todos from './../todo/todos';
import visibilityFilter from './../filter/filter';

import { createStore, combineReducers } from 'Redux';
import React from 'React';
import ReactDOM from 'react-dom';

import FilterList from './../filter/view/filter-list';
import AddTodo from './../todo/view/add-todo';
import TodoList from './../todo/view/todo-list';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const store = createStore(todoApp);

const getVisibleTodos = (
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


const TodoApp = ({
  todos,
  visibilityFilter
}) => {
  const visibleTodos = getVisibleTodos(
    todos,
    visibilityFilter
  );

  return (
    <div>
      <AddTodo onAddAction={onAddTodoAction} />
      <TodoList
        todos={visibleTodos}
        onTodoClick={onTodoClick}
      />
      <FilterList
        visibilityFilter={visibilityFilter}
        onFilterClick={onFilterClick}
      />
    </div>
  );
};

const render = () => {

  ReactDOM.render(
    <TodoApp
      {...store.getState()}
    />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
console.log('DONE');

export default null;
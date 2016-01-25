import React from 'React';
import ReactDOM from 'react-dom';

import AddTodo from '../../todo/view/add-todo';
import TodoList from '../../todo/view/todo-list';
import FilterList from '../../filter/view/filter-list';


const TodoApp = () => (
  <div className="mint-content-box layout__wrapper">
    <div className="mint-content-box__header">
      <h2 className="mint-header-primary mint-header-primary--small">
        Today's todos
      </h2>
    </div>
    <AddTodo />
    <div className="mint-content-box__content">
      <TodoList />
    </div>
    <div className="mint-content-box__actions">
      <FilterList />
    </div>
  </div>
);

export default TodoApp;
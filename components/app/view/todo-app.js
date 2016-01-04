import React from 'React';
import ReactDOM from 'react-dom';

import AddTodo from '../../todo/view/add-todo';
import TodoList from '../../todo/view/todo-list';
import FilterList from '../../filter/view/filter-list';


const TodoApp = () => (
  <div>
    <AddTodo />
    <TodoList />
    <FilterList />
  </div>
);

export default TodoApp;
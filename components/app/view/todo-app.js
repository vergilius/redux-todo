import React from 'React';
import ReactDOM from 'react-dom';

import FilterList from '../../filter/view/filter-list';
import AddTodo from '../../todo/view/add-todo';
import TodoList from '../../todo/view/todo-list';

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

const TodoApp = ({
  todos,
  visibilityFilter,
  onFilterClick,
  onAddTodoAction,
  onTodoClick
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

export default TodoApp;
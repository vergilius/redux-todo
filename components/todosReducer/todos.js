import addTodo from '../todo/add';
import toggleTodo from '../todo/toggle';

const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        addTodo(action)
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if(todo.id != action.id) {
          return todo;
        }

        return toggleTodo(todo);
      });
  }
};

export default todos;
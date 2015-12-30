import todo from './todo';

const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':

      let validTodo = todo(state, action);

      if (validTodo) {
        return [
          ...state,
          validTodo
        ];
      }

      return state;
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

export default todos;
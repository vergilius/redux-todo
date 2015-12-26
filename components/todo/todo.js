const add = (action) => {
  return {
    id: action.id,
    text: action.text,
    completed: false
  }
};

const toggle = (todo, action) => {
  if (todo.id !== action.id) {
    return todo;
  }

  return Object.assign({}, todo, {
    completed: !todo.completed
  });
};

const todoReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return add(action);
    case 'TOGGLE_TODO':
      return toggle(state, action);
    default:
      return state;
  }
};


export default todoReducer;
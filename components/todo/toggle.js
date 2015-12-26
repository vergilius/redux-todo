const toggle = (todo) => {
  return Object.assign({}, todo, {
    completed: !todo.completed
  });
};

export default toggle;
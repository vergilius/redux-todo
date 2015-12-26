const add = (action) => {
  return {
    id: action.id,
    text: action.text,
    completed: false
  }
};

export default add;
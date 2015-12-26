import deepFreeze from 'deep-freeze';
import expect from 'expect';
import todo from './todo';

describe('Todo', () => {

  // add todo
  it('creates new todo according to action', () => {
    const action = {
      type: 'ADD_TODO',
      id: 0,
      text: 'First todo'
    };
    const createdTodo = {
      id: 0,
      text: 'First todo',
      completed: false
    };

    deepFreeze(action);

    expect(todo({}, action)).toEqual(createdTodo);

  });


  // toggle todo
  it('toggles todo without mutation', () => {
    const todoBefore = {
      id: 0,
      text: 'First todo',
      completed: false
    };
    const action = {
      type: 'TOGGLE_TODO',
      id: 0
    };
    const todoAfter = {
      id: 0,
      text: 'First todo',
      completed: true
    };

    deepFreeze(todoBefore);
    deepFreeze(action);

    expect(todo(todoBefore, action)).toEqual(todoAfter);

  });


});
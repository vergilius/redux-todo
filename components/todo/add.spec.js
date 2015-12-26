import deepFreeze from 'deep-freeze';
import expect from 'expect';
import addTodo from './add';
import todos from '../todosReducer/todos';

describe('AddTodo', () => {

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

    expect(addTodo(action)).toEqual(createdTodo);
  });

  it('adds a todo to state (with the reducer)', () => {
    const stateBefore = [];
    const action = {
      type: 'ADD_TODO',
      id: 0,
      text: 'New todo'
    };
    const stateAfter = [
      {
        id: 0,
        text: 'New todo',
        completed: false
      }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(todos(stateBefore, action)).toEqual(stateAfter);

  });
});
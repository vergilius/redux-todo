import deepFreeze from 'deep-freeze';
import expect from 'expect';
import todos from './todos';

describe('Todos list', () => {


  it('adds a todo without mutation (with reducer)', () => {
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
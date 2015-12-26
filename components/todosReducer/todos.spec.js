import deepFreeze from 'deep-freeze';
import expect from 'expect';
import todos from './todos';

describe('Todos reducer', () => {

  it('returns current state if no valid action was passed', () => {
    const stateBefore = [
      {
        id: 0,
        text: 'New todo',
        completed: true
      }
    ];
    const action = {
      type: 'INVALID_ACTION',
      id: 0,
      text: 'New todo2'
    };
    const stateAfter = [
      {
        id: 0,
        text: 'New todo',
        completed: true
      }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(todos(stateBefore, action)).toEqual(stateAfter);

  });
});
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

  it('adds a todo to state', () => {
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

  it('toggles todo in state', () => {
    const stateBefore = [
      {
        id: 0,
        text: 'First todo',
        completed: false
      },
      {
        id: 1,
        text: 'Second todo',
        completed: false
      }
    ];
    const action = {
      type: 'TOGGLE_TODO',
      id: 1
    };
    const stateAfter = [
      {
        id: 0,
        text: 'First todo',
        completed: false
      },
      {
        id: 1,
        text: 'Second todo',
        completed: true
      }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(todos(stateBefore, action)).toEqual(stateAfter);

  });

});
import deepFreeze from 'deep-freeze';
import expect from 'expect';
import toggleTodo from './toggle';
import todos from '../todosReducer/todos';

describe('Toggle todo', () => {

  it('toggles todo without mutation', () => {
    const todoBefore = {
      id: 0,
      text: 'First todo',
      completed: false
    };
    const todoAfter = {
      id: 0,
      text: 'First todo',
      completed: true
    };

    deepFreeze(todoBefore);

    expect(toggleTodo(todoBefore)).toEqual(todoAfter);

  });

  it('toggles todo in state (with the reducer)', () => {
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
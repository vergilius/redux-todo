import deepFreeze from 'deep-freeze';
import expect from 'expect';
import toggleTodo from './toggle';

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
});
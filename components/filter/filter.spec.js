import deepFreeze from 'deep-freeze';
import expect from 'expect';
import filter from './filter';

describe('Filter reducer', () => {

  it('returns default state if no state passed', () => {
    const action = {
      type: 'INVALID_ACTION'
    };
    const stateAfter = 'SHOW_ALL';

    deepFreeze(action);

    expect(filter(undefined, action)).toEqual(stateAfter);

  });

  it('returns new state with valid action', () => {
    const action = {
      type: 'SET_VISIBILITY_FILTER',
      filter: 'VALID_FILTER'
    };
    const stateAfter = 'VALID_FILTER';

    deepFreeze(action);

    expect(filter(undefined, action)).toEqual(stateAfter);

  });
});
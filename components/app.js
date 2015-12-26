import todos from './todo/todos';
import visibilityFilter from './filter/filter';

import { createStore, combineReducers } from 'Redux';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});
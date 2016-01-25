import React from 'React';
import ReactDOM from 'react-dom';

import FilterLink from './filter-link';

const FilterList = () => (
  <p>
    Filter:
    {' '}
    <FilterLink filter='SHOW_ALL'>
      All
    </FilterLink>
    {' '}
    <FilterLink filter='SHOW_ACTIVE'>
      Active
    </FilterLink>
    {' '}
    <FilterLink filter='SHOW_COMPLETED'>
      Completed
    </FilterLink>
  </p>
);

export default FilterList;
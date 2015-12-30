import React from 'React';
import ReactDOM from 'react-dom';

import FilterLink from './filter-link';

const FilterList = ({
  visibilityFilter,
  onFilterClick
}) => {

  return (
    <p>
      Show:
      {' '}
      <FilterLink
        filter='SHOW_ALL'
        currentFilter={visibilityFilter}
        onFilterClick={onFilterClick}
      >
        All
      </FilterLink>
      {' '}
      <FilterLink
        filter='SHOW_ACTIVE'
        currentFilter={visibilityFilter}
        onFilterClick={onFilterClick}
      >
        Active
      </FilterLink>
      {' '}
      <FilterLink
        filter='SHOW_COMPLETED'
        currentFilter={visibilityFilter}
        onFilterClick={onFilterClick}
      >
        Completed
      </FilterLink>
    </p>
  );
};

export default FilterList;
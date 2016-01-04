import React from 'React';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import Link from '../../base/view/link';

const mapStateToProps = (
  state, _props
) => {
  return {
    active: _props.filter === state.visibilityFilter
  }
};

const mapDispatchToProps = (
  dispatch, _props
) => {
  return {
    onClick: () => {
      dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: _props.filter
      })
    }
  }
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
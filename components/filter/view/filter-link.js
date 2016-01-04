import React from 'React';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import Link from '../../base/view/link';

const mapStateToProps = (
  state, ownProps
) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
};

const mapDispatchToProps = (
  dispatch, ownProps
) => {
  return {
    onClick: () => {
      dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: ownProps.filter
      })
    }
  }
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
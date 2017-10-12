import { combineReducers } from 'redux';
import { SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/todoAction';
const { SHOW_ALL } = VisibilityFilters;

import todos from './todoRducer';

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const rootStore = combineReducers({
  visibilityFilter,
  todos
})

export default rootStore
import * as actionTypes from '../actions'

const visibilityFilter = (state = actionTypes.VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case actionTypes.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter

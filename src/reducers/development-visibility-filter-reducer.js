import constants from '../constants';

const visibilityFilter = (state = constants.DEV_FILTER_SHOW_ALL, action) => {
  switch (action.type) {
    case constants.SET_DEVELOPMENT_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
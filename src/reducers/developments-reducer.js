import constants from './../constants';
import initialState from './../data/developments'

const developments = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case constants.DEVELOPMENTS_LIST_LOADED:
      return [
        ...state,
        ...data
      ]
    case constants.ADD_DEVELOPMENT:
      return [
        ...state,
        data
      ]
    default:
      return state
  }
}

export default developments
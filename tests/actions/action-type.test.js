import * as actions from './../../src/actions/action-type'
import constants from '../../src/constants'

describe('actions', () => {
  it('should create an action to add a development filter', () => {
    const filter = constants.DEV_FILTER_SHOW_ALL
    const expectedAction = {
      type: constants.SET_DEVELOPMENT_FILTER,
      filter
    }
    expect(actions.setDevelopmentFilter(filter)).toEqual(expectedAction)
  })
})
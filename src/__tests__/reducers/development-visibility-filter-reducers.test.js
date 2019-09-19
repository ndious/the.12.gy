import reducer from './../../reducers/development-visibility-filter-reducer'
import constants from './../../constants'

describe('develoment visibility filter reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(constants.DEV_FILTER_SHOW_ALL)
  })

  it('should handle SET_DEVELOPMENT_FILTER', () => {
    expect(
      reducer([], {
        type: constants.SET_DEVELOPMENT_FILTER,
        filter: constants.DEV_FILTER_SHOW_OPENSOURCE
      })
    ).toEqual(constants.DEV_FILTER_SHOW_OPENSOURCE)

    expect(
      reducer([], {
        type: constants.SET_DEVELOPMENT_FILTER,
        filter: constants.DEV_FILTER_SHOW_ONLINE
      })
    ).toEqual(constants.DEV_FILTER_SHOW_ONLINE)

    expect(
      reducer([], {
        type: constants.SET_DEVELOPMENT_FILTER,
        filter: constants.DEV_FILTER_SHOW_PERSONNALS
      })
    ).toEqual(constants.DEV_FILTER_SHOW_PERSONNALS)
  })
})

import reducer from './../../src/reducers/developments-reducer'
import data from './../../src/data/developments.json'
//import * as types from '../../constants/ActionTypes'

describe('develoments reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(data)
  })
})
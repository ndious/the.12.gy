import reducer from './../../src/reducers/developments-reducer'
import data from './../../src/data/developments.json'

describe('develoments reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(data)
  })
})
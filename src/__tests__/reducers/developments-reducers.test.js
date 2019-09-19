import reducer from './../../reducers/developments-reducer'
import data from './../../data/developments.json'

describe('develoments reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(data)
  })
})

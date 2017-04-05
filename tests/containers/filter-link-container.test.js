import React from 'react'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'

import FilterLink from './../../src/containers/filter-link-container'
import constants from './../../src/constants'

const setup = () => {
  const store = configureMockStore()({})
  spyOn(store, 'dispatch')
  const props = {
    filter: constants.DEV_FILTER_SHOW_ALL
  }
  const wrapper = shallow(<FilterLink {...props}>test</FilterLink>, {context: {store: store}})

  return {
    store,
    wrapper
  }
}

describe('FilterLink', () => {

	it('should render', () => {
    const { wrapper } = setup()
    const Button = wrapper.find('FilterButton')

		expect(Button.length).toBeTruthy()
	});

  it('should dispatch development filter', () => {
    const { wrapper, store } = setup()
    const Button = wrapper.find('FilterButton')
    const preventDefault = jest.fn()

    Button.simulate('click', { preventDefault })
    expect(store.dispatch).toHaveBeenCalledWith(
      { type: constants.SET_DEVELOPMENT_FILTER, filter: constants.DEV_FILTER_SHOW_ALL }
    );
  })
});
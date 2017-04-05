import React from 'react';
import { createStore } from 'redux'
import { shallow, mount } from 'enzyme'

import Reducers from './../../src/reducers'
import { setDevelopmentFilter } from './../../src/actions/action-type.js'
import constants from './../../src/constants'
import DevelopmentsContainer from './../../src/containers/developments-container'
import developments from './../../src/data/developments.json'

const setup = () => {
  const store = createStore(Reducers)
  const wrapper = mount(<DevelopmentsContainer />, {context: {store: store}})

  return {
    store,
    wrapper
  }
}

describe('DevelopmentsContainer', () => {

	it('should render', () => {
    const { wrapper } = setup()
    const List = wrapper.find('DevelopmentList')

		expect(wrapper.find('DevelopmentList').length).toBe(1)

    expect(List.find('Development').length).toBe(developments.length)
	});

  it('should filter list', () => {
    const { wrapper, store } = setup()

    store.dispatch(setDevelopmentFilter(constants.DEV_FILTER_SHOW_OPENSOURCE))
    expect(wrapper.find('Development').length).toBe(developments.filter(dev => dev.opensource).length)

    store.dispatch(setDevelopmentFilter(constants.DEV_FILTER_SHOW_ONLINE))
    expect(wrapper.find('Development').length).toBe(developments.filter(dev => dev.status === 'online').length)

    store.dispatch(setDevelopmentFilter(constants.DEV_FILTER_SHOW_PERSONNALS))
    expect(wrapper.find('Development').length).toBe(developments.filter(dev => !dev.company).length)

    const filter = 'Ga bu zo'
    try {
      store.dispatch(setDevelopmentFilter(filter))
      expect(false).toBe(true)
    } catch ($e) {
      expect($e.message).toBe(`Unknown filter: ${filter}`)
    }
  })
});

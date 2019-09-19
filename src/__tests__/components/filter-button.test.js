import React from 'react'
import { createStore } from 'redux'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

import Reducers from './../../reducers'
import FilterButton from './../../components/filter-button'

configure({adapter: new Adapter()});

function setup(active = false) {
  const props = {
    active,
    children: 'test',
    onClick: jest.fn()
  }

  const enzymeWrapper = shallow(<FilterButton {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('container', () => {
  describe('FilterLinkContainer', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()

      expect(enzymeWrapper.find('li').hasClass('active')).toBe(false)
      expect(enzymeWrapper.find('a').text()).toBe('test')
    })

    it('should render self and subcomponents as active', () => {
      const { enzymeWrapper } = setup(true)

      expect(enzymeWrapper.find('li').hasClass('active')).toBe(true)
    })

    it('should call onClick', () => {
      const { enzymeWrapper, props } = setup()
      const a = enzymeWrapper.find('a')
      const preventDefault = jest.fn();

      expect(props.onClick.mock.calls.length).toBe(0)
      expect(preventDefault.mock.calls.length).toBe(0)

      a.simulate('click', { preventDefault })

      expect(props.onClick.mock.calls.length).toBe(1)
      expect(preventDefault.mock.calls.length).toBe(1)
    })
  })
})

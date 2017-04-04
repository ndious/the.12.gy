import React from 'react'
import { shallow } from 'enzyme'
import Footer from './../../src/components/footer'

function setup() {
  const enzymeWrapper = shallow(<Footer />)

  return enzymeWrapper
}

describe('components', () => {
  describe('Footer', () => {
    it('should render self and subcomponents', () => {
      const enzymeWrapper = setup()

      expect(enzymeWrapper.find('footer').hasClass('footer')).toBe(true)
      expect(enzymeWrapper.find('a').length).toBe(6)
    })
  })
})
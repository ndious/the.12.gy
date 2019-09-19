import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import Footer from './../../components/footer'
import socials from './../../data/socials.json'

configure({adapter: new Adapter()});

function setup() {
  const enzymeWrapper = shallow(<Footer />)

  return enzymeWrapper
}

describe('components', () => {
  describe('Footer', () => {
    it('should render self and subcomponents', () => {
      const enzymeWrapper = setup()

      expect(enzymeWrapper.find('footer').hasClass('footer')).toBe(true)
      expect(enzymeWrapper.find('Social').length).toBe(socials.length)
      expect(enzymeWrapper.find('Build').length).toBe(2)
    })
  })
})

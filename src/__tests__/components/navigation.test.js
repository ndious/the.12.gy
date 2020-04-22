import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import Navigation from './../../components/navigation'

configure({adapter: new Adapter()});

function setup(pathname) {
  const props = {
    pathname
  }

  const enzymeWrapper = shallow(<Navigation {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Header', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup('/')

      expect(enzymeWrapper.find('header').length).toBe(1)

      expect(enzymeWrapper.find({isActive: true}).length).toBe(0)
      expect(enzymeWrapper.find({isActive: false}).length).toBe(2)

      expect(enzymeWrapper.find('Brand').length).toBe(1)
      expect(enzymeWrapper.find('Link').length).toBe(2)
    })

    it('should set active on the good link when pathname is /experiences', () => {
      const { enzymeWrapper } = setup('/experiences')

      expect(enzymeWrapper.find({isActive: true}).length).toBe(1)
      expect(enzymeWrapper.find({isActive: true}).children().children().text()).toBe('Experiences')
      expect(enzymeWrapper.find({isActive: false}).length).toBe(1)
    })

    it('should set active on the good link when pathname is /developments', () => {
      const { enzymeWrapper } = setup('/developments')

      expect(enzymeWrapper.find({isActive: true}).length).toBe(1)
      expect(enzymeWrapper.find({isActive: true}).children().children().text()).toBe('Developments')
      expect(enzymeWrapper.find({isActive: false}).length).toBe(1)
    })

  })
})

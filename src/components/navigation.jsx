import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { Navbar, Nav } from 'react-bootstrap'

import { BrandBlock } from './blocks'
import './../assets/navigation.css'

const Li = ({children, isActive}) => (<li className={isActive ? 'active' : ''}>{children}</li>)

const Navigation = ({pathname}) => (
  <header>
    <Navbar collapseOnSelect fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <BrandBlock />
        </Navbar.Brand>
      <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <Li isActive={pathname === '/experiences'}><Link to="/experiences">Experiences</Link></Li>
          <Li isActive={pathname === '/developments'}><Link to="/developments">Developments</Link></Li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

Navigation.contextTypes = {
  router: React.PropTypes.any
};

Navigation.propTypes = {
  pathname: PropTypes.string.isRequired
}

export default Navigation;

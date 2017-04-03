import React from 'react';
import { Link } from 'react-router'
import { Navbar, Nav } from 'react-bootstrap'

import './../assets/navigation.css'

const titles = ['isNaN("12");', 'isNaN([12]);', '!isNaN(12);', 'isNaN({12:12});', 'isNaN(Error(12));', 'isNaN(12 + NaN);'];

const getRandomTitle = () => titles[Math.floor(Math.random() * (titles.length))];

const Li = ({children, isActive}) => (<li className={isActive ? 'active' : ''}>{children}</li>)

const Navigation = ({pathname}) => {
  const title = getRandomTitle();
  document.title = 'true === ' + title;
  return (
    <header>
      <Navbar collapseOnSelect fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/" className="navbar-brand"><code>{title}</code></Link>
              </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <Li isActive={pathname === '/experiences'}><Link to="/experiences">Experiences</Link></Li>
              <Li isActive={pathname === '/developments'}><Link to="/developments">Developments</Link></Li>
              <Li isActive={pathname === '/activity'}><Link to="/activity">@activity</Link></Li>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

Navigation.contextTypes = {
  router: React.PropTypes.any
};

export default Navigation;

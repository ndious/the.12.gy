import React from 'react';
import { Link } from 'react-router'

const titles = ['isNaN("12");', 'isNaN([12]);', '!isNaN(12);', 'isNaN({12:12});', 'isNaN(Error(12));', 'isNaN(12 + NaN);'];

const Brand = () => {
  const title = titles[Math.floor(Math.random() * (titles.length))];
  document.title = 'true === ' + title;

  return (<Link to="/" className="navbar-brand"><code>{title}</code></Link>)
}

export default Brand
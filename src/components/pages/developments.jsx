import React from 'react';

import DevelopmentsContainer from './../../containers/developments-container'
import DevelopmentsFilter from './../developments-filter.jsx'

import './../../assets/developments.css'

const Developments = () => (
  <div className="developments-page">
    <DevelopmentsContainer />
    <DevelopmentsFilter />
  </div>
);

export default Developments;

import React from 'react';

import DevelopmentsContainer from './../../containers/developments-container'
import DevelopmentsFilter from './../developments-filter.jsx'

const Developments = () => {
  return (
    <div className="developments-page">
      <DevelopmentsContainer />
      <DevelopmentsFilter />
    </div>
  );
}

export default Developments;

import React, { Component } from 'react';
import DevelopmentsContainer from './../../containers/developments-container'
import DevelopmentsFilter from './../developments-filter.jsx'

class DevelopmentsPage extends Component {
  render() {
    return (
      <div className="developments-page">
        <DevelopmentsFilter />
        <DevelopmentsContainer />
      </div>
    );
  }
}

export default DevelopmentsPage;

import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap' 

import Experience from './../experience';
import data from './../../data/experiences'

class Experiences extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12}>
            {data.map((experience, key) => (<Experience key={key} {...experience} />))}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Experiences;

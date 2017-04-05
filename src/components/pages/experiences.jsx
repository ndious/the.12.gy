import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap' 

import Experience from './../experience';
import data from './../../data/experiences.json'
import './../../assets/experiences.css'

const Experiences = () => (
  <Grid className="experiences-page">
    <Row>
      <Col xs={12}>
        {data.map((experience, key) => (<Experience key={key} {...experience} />))}
      </Col>
    </Row>
  </Grid>
);

export default Experiences;

import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'react-bootstrap'

const Curiosity = ({title, desc, icon}) => (
  <Col xs={6} md={3} className="text-center">
    <h3>{title}</h3>
    <div><i className={`icon ion-${icon}`}></i></div>
    <p className="lead">{desc}</p>
  </Col>
)

Curiosity.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Curiosity

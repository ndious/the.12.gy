import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'react-bootstrap'

const Build = ({url, src, alt}) => (
  <Col xs={4} sm={6} className="build-link">
    <a href={url}><img alt={alt} src={src} /></a>
  </Col>
)

Build.propTypes = {
  url: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Build

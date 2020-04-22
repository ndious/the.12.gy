import React from 'react'
import PropTypes from 'prop-types'
import { Col, OverlayTrigger, Tooltip } from 'react-bootstrap'

const Social = ({url, overlay, icon}) => (
  <Col xs={2} sm={1}>
    <OverlayTrigger placement="top" overlay={<Tooltip id={icon}>{overlay}</Tooltip>}>
      <a href={url} className="footer-link"><i className={`icon ion-${icon}`}></i></a>
    </OverlayTrigger>
  </Col>
)

Social.propTypes = {
  url: PropTypes.string.isRequired,
  overlay: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Social

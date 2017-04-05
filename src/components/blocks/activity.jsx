import React, { PropTypes} from 'react'
import { Row, Col, ResponsiveEmbed } from 'react-bootstrap' 

const Activity = ({title, src}) => (
  <Row>
    <Col xs={12} md={8} mdOffset={2}>
      {title}
    </Col>
    <Col xs={12} md={8} mdOffset={2}>
      <ResponsiveEmbed a4by3>
        <figure><embed src={src}></embed></figure>
      </ResponsiveEmbed>
    </Col>
  </Row>
);

Activity.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
}

export default Activity;
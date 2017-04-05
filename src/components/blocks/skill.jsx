import React, { PropTypes } from 'react'
import { Row, Col } from 'react-bootstrap'

const Skill = ({title, level}) => (
  <li>
    <Row>
      <Col xs={5} sm={6}>
        {title} 
      </Col>
      <Col xs={7} sm={6}>
        {[1, 2, 3, 4, 5].map((val) => {
          const delta = (level + 1 - val)
          const icon = (delta <= 0) ? 'star-outline' : (delta === 0.5 ? 'star-half' : 'star')
          return (<i key={val} className={`ion-android-${icon}`}></i>)
        })}
      </Col>
    </Row>
  </li>
)

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired
}

export default Skill
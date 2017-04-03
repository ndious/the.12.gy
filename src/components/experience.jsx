import React from 'react'
import { Jumbotron, Row, Col } from 'react-bootstrap'

import Definition from './../definitions/experience-definition'
// import './../assets/development.css'

const Experience = ({ 
  company, 
  city, 
  date,
  title,
  sub
}) => (
  <Jumbotron>
    <h1>{company} <small className="text-right">{city}</small></h1>
    <p>{date} - {title}</p>

    <Row className="show-grid">
      <Col xs={11} xsOffset={1}>
        {sub && sub.map(({date, work}, key) => (
          <div key={key}>
            <p>{date} - {work}</p>
          </div>
        ))}
      </Col>
    </Row>
  </Jumbotron>
)

Experience.propTypes = Definition

export default Experience

import React from 'react'
import { Jumbotron } from 'react-bootstrap'

import Definition from './../definitions/experience-definition'

const Experience = ({ 
  company, 
  city, 
  date,
  title,
  sub
}) => (
  <Jumbotron>
    <h1 className="jumbo-title">{company} <small className="location"><i className="ion-location"></i> {city}</small></h1>
    <p className="lead">{date} <i className="ion-code-working"></i> {title}</p>

    <ul className="list-unstyled job-list">
      {sub && sub.map(({date, work}, key) => (
        <li key={key}>
          <i className="ion-ios-arrow-forward"></i> {date} - {work}
        </li>
      ))}
    </ul>
  </Jumbotron>
)

Experience.propTypes = Definition

export default Experience

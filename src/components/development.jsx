import React from 'react'
import { Jumbotron, Button, Row, Col } from 'react-bootstrap'

import Definition from './../definitions/development-definition'

const Development = ({ 
  name, 
  url, 
  opensource,
  description,
  techs,
  status,
  company,
  work
}) => (
  <Jumbotron>
    <h1 className="jumbo-title">{name}</h1>
    <p className="lead">{description}</p>
    <p className="lead">Work : {work}</p>
    <p className="small">Status: {status}</p>

    <Row className="show-grid">
      <Col xs={12}>
        <div className="btn-group" role="group" aria-label="...">
          {opensource && <Button bsStyle="success" href={opensource}>Github</Button>}
          {url  && <Button bsStyle="primary" disabled={status !== 'online'} href={url}>{url}</Button>}
        </div>
      </Col>
    </Row>
    <Row className="show-grid">
      <Col xs={12}>
        <div className="btn-group" role="group" aria-label="...">
          {techs.map((value, key) => (<Button key={key} bsStyle="info">{value}</Button>))}
        </div>
      </Col>
    </Row>
  </Jumbotron>
)

Development.propTypes = Definition

export default Development
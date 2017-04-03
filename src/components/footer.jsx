import React from 'react'
import { Grid, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap' 

import './../assets/footer.css'

const Footer = () => (
  <footer className="footer">
    <Grid>
      <Row className="social-icons">
        <Col xs={1}>
          <OverlayTrigger placement="top" overlay={<Tooltip id="twitter">Twitter account</Tooltip>}>
            <a href="https://www.twitter.com/@ndufreche"><i className="icon ion-social-twitter"></i></a>
          </OverlayTrigger>
        </Col>
        <Col xs={1}>
          <OverlayTrigger placement="top" overlay={<Tooltip id="github">Github account</Tooltip>}>
            <a href="https://github.com/ndufreche"><i className="icon ion-social-github"></i></a>
          </OverlayTrigger>
        </Col>
        <Col xs={1}>
          <OverlayTrigger placement="top" overlay={<Tooltip id="github">Github account</Tooltip>}>
            <a href="http://stackoverflow.com/users/802872/ndufreche"><i className="icon ion-android-chat"></i></a>
          </OverlayTrigger>
        </Col>
        <Col xs={1}>
          <OverlayTrigger placement="top" overlay={<Tooltip id="github">Github account</Tooltip>}>
            <a href="https://fr.linkedin.com/in/nicolas-dufreche-95798a15"><i className="icon ion-social-linkedin"></i></a>
          </OverlayTrigger>
        </Col>
        <Col xs={1}>
          <OverlayTrigger placement="top" overlay={<Tooltip id="github">Github account</Tooltip>}>
            <a href="https://plus.google.com/+NicolasDufreche"><i className="icon ion-social-googleplus"></i></a>
          </OverlayTrigger>
        </Col>
        <Col xs={1}>
          <OverlayTrigger placement="top" overlay={<Tooltip id="github">Github account</Tooltip>}>
            <a href="https://www.facebook.com/di0us"><i className="icon ion-social-facebook"></i></a>
          </OverlayTrigger>
        </Col>
      </Row>
    </Grid>
  </footer>
)

export default Footer

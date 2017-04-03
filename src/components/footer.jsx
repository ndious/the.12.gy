import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap' 

import './../assets/footer.css'

const Footer = () => (
  <footer className="footer">
    <Grid>
      <Row className="show-grid">
        <Col xs={6} md={4}>
          <a href="https://www.twitter.com/@ndufreche">twitter @ndufreche</a>
        </Col>
      </Row>
    </Grid>
  </footer>
)

export default Footer
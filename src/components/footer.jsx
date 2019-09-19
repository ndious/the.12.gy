import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import { SocialBlock, BuildBlock } from './blocks'
import socials from './../data/socials.json'
import './../assets/footer.css'

const Footer = () => (
  <footer className="footer">
    <Grid>
      <Row className="social-icons">
        {socials.map((social, key) => (<SocialBlock key={key} {...social} />))}

        <Col xsHidden sm={4} smOffset={2} md={3} mdOffset={3} lg={3} lgOffset={3}>
          <Row className="social-icons">
            {
              [
                {
                  url: 'https://travis-ci.org/ndious/the.12.gy',
                  src: 'https://travis-ci.org/ndious/the.12.gy.svg?branch=master',
                  alt: 'tarvis-ci build status badge'
                },
                {
                  url: 'https://codeclimate.com/github/ndious/the.12.gy',
                  src: 'https://codeclimate.com/github/ndious/the.12.gy/badges/gpa.svg',
                  alt: 'code climate badge'
                }
              ].map((build, key) => (<BuildBlock key={key} {...build} />))
            }
          </Row>
        </Col>
      </Row>
    </Grid>
  </footer>
)

export default Footer

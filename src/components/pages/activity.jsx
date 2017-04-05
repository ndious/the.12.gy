import React from 'react'
import { Grid, Row, Col, ResponsiveEmbed } from 'react-bootstrap' 

const Activity = () => (
  <Grid className="activity-page">
    <Row className="show-grid">
      <Col xs={12} md={8} mdOffset={2}>
        Laguage Used over last 7 days
      </Col>
      <Col xs={12} md={8} mdOffset={2}>
        <ResponsiveEmbed a4by3>
          <figure><embed src="https://wakatime.com/share/@ndufreche/8baf5962-4bf0-406f-bbd8-4a126c31cad5.svg"></embed></figure>
        </ResponsiveEmbed>
      </Col>
      <Col xs={12} md={8} mdOffset={2}>
        Coding Activity over last 7 days
      </Col>
      <Col xs={12} md={8} mdOffset={2}>
        <ResponsiveEmbed a4by3>
          <figure><embed src="https://wakatime.com/share/@ndufreche/9396a66a-8799-4cb4-8663-3ca58b51d10c.svg"></embed></figure>
        </ResponsiveEmbed>
      </Col>
    </Row>
  </Grid>
);

export default Activity;
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
          <figure><embed src="https://wakatime.com/share/@ndufreche/1f4befc2-85f2-4f68-8f0a-1924530be931.svg"></embed></figure>
        </ResponsiveEmbed>
      </Col>
      <Col xs={12} md={8} mdOffset={2}>
        Coding Activity over last 7 days
      </Col>
      <Col xs={12} md={8} mdOffset={2}>
        <ResponsiveEmbed a4by3>
          <embed src="https://wakatime.com/share/@ndufreche/9539a9f8-4824-42c8-98bf-c257d2b4bbc2.svg"></embed>
        </ResponsiveEmbed>
      </Col>
    </Row>
  </Grid>
);

export default Activity;
import React from 'react'
import { Grid, Row, Col, Clearfix } from 'react-bootstrap'

import { CuriosityBlock, SkillBlock } from './../blocks'
import { curiosities, skillz } from './../../data/home.json'

import './../../assets/home.css'

const Home = () => (
  <div className="home-page">
    <Grid>
      <Row>
        <Col xs={12}>
          <h2 className="meet">Meet the 12 guy</h2>
          <h1>Nicolas Dufreche</h1>
        </Col>
      <Row>
      </Row>
        <Col xs={12}>
          <h2 className="small">I'm Web Developer / Enginer in <abbr title="Research and Developments">R&D</abbr></h2>
        </Col>
      </Row>
      <Row>
        <Col xs={6} sm={4}>
          <h4>Why me :</h4>
          <ul className="list">
            <li>I'm hard worker</li>
            <li>I love my job</li>
            <li>I'm' experimented</li>
            <li>I use multiple technologies</li>
          </ul>
        </Col>
        <Col xs={6} sm={5} smOffset={3} md={4} mdOffset={4} lg={3} lgOffset={5}>
          <h4>Skillz :</h4>
          <ul className="list-unstyled">
            {
              skillz.map((skill, key) => (<SkillBlock key={key} {...skill} />))
            }
          </ul>
        </Col>
      </Row>
      <Row>
        {
          curiosities.map((values, key) => {
            return key % 2 ? (<CuriosityBlock key={key} {...values} />) : (<span key={key}><Clearfix visibleXsBlock visibleSmBlock /><CuriosityBlock {...values} /></span>)
          })
        }
      </Row>
    </Grid>
  </div>
);


export default Home;

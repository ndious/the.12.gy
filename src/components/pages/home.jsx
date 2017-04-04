import React from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap'

import { curiosities, skillz } from './../../data/home.json'

import './../../assets/home.css'

const CuriosityBlock = ({title, desc, icon}) => (
  <Col xs={6} md={3} className="text-center">
    <h3>{title}</h3>
    <div><i className={`icon ion-${icon}`}></i></div>
    <p className="lead">{desc}</p>
  </Col>
)

const SkillBlock = ({title, level}) => (
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

const Home = () => {
  return (
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
}


export default Home;

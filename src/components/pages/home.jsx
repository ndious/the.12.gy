import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap' 


class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <Grid>
          <Row>
            <Col xs={12}>
              <h2>Meet the 12 guy</h2>
              <h1>Nicolas Dufreche</h1>
            </Col>
          <Row>
          </Row>
            <Col xs={12}>
              <h2 className="small">I'm Web Developer / Enginer in <abbr title="Research and Developments">R&D</abbr></h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12}  className="text-center">
              <h4>Why me :</h4>
              <ul className="list-unstyled">
                <li>I'm hard worker</li>
                <li>I love my job</li>
                <li>I have experiences</li>
                <li>I use multiple technologies</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={3} className="text-center">
              <h3>learn</h3>
              <div><i className="icon ion-ios-infinite"></i></div>
              <p className="lead">Self-made man, I work every day to be a better developer, upgrading my skills/knowledges and learn new technologies.</p>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <h3>Create</h3>
              <div><i className="icon ion-ios-lightbulb"></i></div>
              <p className="lead">I can find solutions for all problems encoutered. I never give up and I think about evrithing is possible.</p>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <h3>Experiment</h3>
              <div><i className="icon ion-erlenmeyer-flask"></i></div>
              <p className="lead">I work on new paradigms, try to create innovating solutions. More abstract is it, better I'm.</p>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <h3>Develop</h3>
              <div><i className="icon ion-code"></i></div>
              <p className="lead">Need to optimise historical code, reduce technical debt, deep refactoring. I can help you on every steps of program life cycles</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;

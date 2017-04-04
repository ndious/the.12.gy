import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap' 

import Development from './development.jsx'
import Definition from './../definitions/development-definition'

const DevelopmentList = ({developments}) => (
  <Grid>
    <Row className="show-grid">
      <Col xs={12}>
        {developments.map((development, key) =>
          <Development
            key={key}
            {...development}
          />
        )}
      </Col>
    </Row>
  </Grid>
);



DevelopmentList.propTypes = {
  developments: PropTypes.arrayOf(PropTypes.shape(Definition).isRequired)
}

export default DevelopmentList
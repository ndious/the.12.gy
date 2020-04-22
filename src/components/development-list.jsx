import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-bootstrap'

import Development from './development.jsx'
import Definition from './../definitions/development-definition'

const DevelopmentList = ({developments}) => (
  <Grid>
    <Row>
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
  developments: PropTypes.arrayOf(PropTypes.shape(Definition).isRequired).isRequired
}

export default DevelopmentList

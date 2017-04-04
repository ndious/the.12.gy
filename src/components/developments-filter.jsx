import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap' 

import constants from './../constants'
import FilterLink from './../containers/filter-link-container'

const DevelopmentsFilter = () => (
  <Grid className="navbar-fixed-top">
    <Row>
      <Col xs={12}>
        <ul className="nav nav-pills">
          <FilterLink filter={constants.DEV_FILTER_SHOW_ALL}>
            All
          </FilterLink>
          <FilterLink filter={constants.DEV_FILTER_SHOW_OPENSOURCE}>
            Open Source
          </FilterLink>
          <FilterLink filter={constants.DEV_FILTER_SHOW_ONLINE}>
            Online
          </FilterLink>
          <FilterLink filter={constants.DEV_FILTER_SHOW_PERSONNALS}>
            Personnals
          </FilterLink>
        </ul>
      </Col>
    </Row>
  </Grid>
)

export default DevelopmentsFilter
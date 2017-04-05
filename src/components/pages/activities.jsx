import React from 'react'
import { Grid } from 'react-bootstrap'

import { ActivityBlock } from './../blocks'
import activities from './../../data/activities.json'

const Activities = () => (
  <Grid className="activities page">
    {activities.map((val, key) => (<ActivityBlock key={key} {...val} />))}
  </Grid>
);

export default Activities;
import React from 'react'
import constants from './../constants'
import FilterLink from './../containers/filter-link-container'

const DevelopmentsFilter = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter={constants.DEV_FILTER_SHOW_ALL}>
      All
    </FilterLink>
    {", "}
    <FilterLink filter={constants.DEV_FILTER_SHOW_OPENSOURCE}>
      Open Source
    </FilterLink>
    {", "}
    <FilterLink filter={constants.DEV_FILTER_SHOW_ONLINE}>
      Online
    </FilterLink>
    {", "}
    <FilterLink filter={constants.DEV_FILTER_SHOW_PERSONNALS}>
      Personnals
    </FilterLink>
  </p>
)

export default DevelopmentsFilter
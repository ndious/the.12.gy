import React from 'react'
import PropTypes from 'prop-types'

const FilterButton = ({ active, children, onClick }) => (
  <li role="presentation" className={active && 'active'}>
    <a href="#"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  </li>
)

FilterButton.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default FilterButton

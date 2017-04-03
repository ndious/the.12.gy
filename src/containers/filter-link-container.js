import { connect } from 'react-redux'
import { setDevelopmentFilter } from './../actions/action-type'
import FilterButton from './../components/filter-button.jsx'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.filter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setDevelopmentFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterButton)

export default FilterLink
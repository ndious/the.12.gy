import { connect } from 'react-redux'
import DevelopmentList from './../components/development-list.jsx'
import constants from './../constants'

const getDevelopments = (developments, filter) => {
  switch (filter) {
    case constants.DEV_FILTER_SHOW_ALL:
      return developments
    case constants.DEV_FILTER_SHOW_OPENSOURCE:
      return developments.filter(dev => !!dev.opensource)
    case constants.DEV_FILTER_SHOW_ONLINE:
      return developments.filter(dev => dev.status === 'online')
    case constants.DEV_FILTER_SHOW_PERSONNALS:
      return developments.filter(dev => !dev.company)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => {
  return {
    developments: getDevelopments(state.developments, state.filter)
  }
}

const DevelopmentContainer = connect(
  mapStateToProps
)(DevelopmentList)

export default DevelopmentContainer

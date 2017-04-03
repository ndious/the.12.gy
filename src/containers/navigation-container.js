import { connect } from 'react-redux'
import Navigation from './../components/navigation.jsx'

const mapStateToProps = (state, ownProps) => {
  return {
    pathname: state.routing.locationBeforeTransitions.pathname
  }
}

const NavigationContainer = connect(
  mapStateToProps,
)(Navigation)

export default NavigationContainer
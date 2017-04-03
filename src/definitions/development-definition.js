import { PropTypes } from 'react'

export default {
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
  opensource: PropTypes.string,
  description: PropTypes.string.isRequired,
  techs: PropTypes.array.isRequired,
  status: PropTypes.oneOf(['online', 'offline', 'development', 'conception', 'broken']),
  company: PropTypes.string,
  work: PropTypes.string.isRequired
}
    
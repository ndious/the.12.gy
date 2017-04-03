import { PropTypes } from 'react'

export default {
  company: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  sub: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    work: PropTypes.string.isRequired
  }))
}

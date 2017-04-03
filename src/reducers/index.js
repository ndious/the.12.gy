import { combineReducers } from 'redux'
import developments from './developments-reducer'
import filter from './development-visibility-filter-reducer'
import { routerReducer as routing } from 'react-router-redux'

const App = combineReducers({
  developments,
  filter,
  routing
})

export default App
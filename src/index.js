import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import Reducers from './reducers'
import App from './components/app'
import { HomePage, DevelopmentsPage, ActivityPage } from './components/pages'

const store = createStore(
  Reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <div className="full-height">
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={HomePage}/>
          <Route path="developments" component={DevelopmentsPage}/>
          <Route path="activity" component={ActivityPage}/>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
)

export { history }

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { ActivitiesPage } from './../../../components/pages'
import Reducers from './../../../reducers'
import App from './../../../components/app';

const store = createStore(
  Reducers
)

const history = syncHistoryWithStore(browserHistory, store)

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Provider store={store}>
      <div className="full-height">
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={ActivitiesPage}/>
          </Route>
        </Router>
      </div>
    </Provider>,
    div
  );
});

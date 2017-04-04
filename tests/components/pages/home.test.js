
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { HomePage } from './../../../src/components/pages'
import Reducers from './../../../src/reducers'
import App from './../../../src/components/app';

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
            <IndexRoute component={HomePage}/>
          </Route>
        </Router>
      </div>
    </Provider>,
    div
  );
});

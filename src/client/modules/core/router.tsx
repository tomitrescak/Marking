import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import { getRootNode } from '../../helpers/routing_helpers';

// Components
import Layout from './components/layout';
import HomePage from './components/home_view';

// Hot reload
import { AppContainer as HotLoaderAppContainer } from 'react-hot-loader';
import AppRoutes from './routes';

export default function (inject: Function, {Store}: IContext) {
  const history = syncHistoryWithStore(browserHistory, Store);

  const renderApp = (CurrentAppRoutes: any) => {
    ReactDOM.render(
      <HotLoaderAppContainer>
        <Provider store={Store}>
          <CurrentAppRoutes history={ history } injectDeps={inject} />
        </Provider>
      </HotLoaderAppContainer>,
      getRootNode('react-root')
    );
  };

  renderApp(AppRoutes);

  if (module.hot) {
    module.hot.accept('./routes.jsx', () => {
      const NextAppRoutes = require('./routes').default;
      renderApp(NextAppRoutes);
    });
  }
};

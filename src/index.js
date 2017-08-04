import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Routes } from './containers/layouts';
import configureStore, { history, sagaMiddleware } from './state/store';
import { ConnectedRouter } from 'react-router-redux';
import { persistStore } from 'redux-persist';
import { sessionSagas } from './state/modules/session';

const store = configureStore();

persistStore(store);
sagaMiddleware.run(sessionSagas);

ReactDOM.render(
  <Provider store={store}>

  <ConnectedRouter history={history}>
    <Routes />
  </ConnectedRouter>

</Provider>, document.getElementById('root'));

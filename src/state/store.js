import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose
} from 'redux';
import {
  autoRehydrate
} from 'redux-persist';
import * as reducers from './modules';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import {
  routerReducer,
  routerMiddleware
} from 'react-router-redux';

// Create a history of your choosing (we're using a browser history in this case).
export const history = createHistory();

export const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const combinedReducers = combineReducers({
    ...reducers,
    router: routerReducer
  });

  return createStore(
    combinedReducers,
    undefined,
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history)
      ),
      autoRehydrate()
    )
  );
}

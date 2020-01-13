import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';

import { createAppContainer } from 'react-navigation';
import screens from './composeScreens';
import { setNavigator } from './navigationRef';

const App = createAppContainer(screens);

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default () => {
  return (
    <Provider store={store}>
      <App
        ref={navigator => {
          setNavigator(navigator);
        }}
      />
    </Provider>
  );
};

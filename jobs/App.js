import React, { useEffect } from 'react';
import { Notifications } from 'expo';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';

import { createAppContainer } from 'react-navigation';
import screens from './composeScreens';
import { setNavigator } from './navigationRef';

import registerForNotifications from './services/pushNotification';

const App = createAppContainer(screens);

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default () => {
  useEffect(() => {
    registerForNotifications();
    Notifications.addListener(notification => {
      const {
        data: { text },
        origin
      } = notification;

      if (origin === 'received' && text) {
        Alert.alert('New Push Notification', text, [{ text: 'Ok.' }]);
      }
    });
  }, []);

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

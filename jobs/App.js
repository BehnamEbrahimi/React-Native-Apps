import React, { useEffect } from 'react';
import { Alert } from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import factory from './store';
const { store, persistor } = factory();

import { createAppContainer } from 'react-navigation';
import screens from './composeScreens';
import { setNavigator } from './navigationRef';

import { Notifications } from 'expo';
import registerForNotifications from './services/pushNotification';

const App = createAppContainer(screens);

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
      <PersistGate loading={null} persistor={persistor}>
        <App
          ref={navigator => {
            setNavigator(navigator);
          }}
        />
      </PersistGate>
    </Provider>
  );
};

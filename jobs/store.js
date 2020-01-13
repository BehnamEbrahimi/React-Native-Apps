import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import rootReducer from './reducers';

export default () => {
  let store = createStore(
    persistReducer(
      {
        key: 'root',
        storage: AsyncStorage,
        whitelist: ['likedJobs']
      },
      rootReducer
    ),
    {},
    composeWithDevTools(applyMiddleware(thunk))
  );

  let persistor = persistStore(store);

  return { store, persistor };
};

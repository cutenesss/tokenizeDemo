import * as React from 'react';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

import theme from './theme.json';
import mapping from './mapping.json';
import configureStore from './src/redux/store';
import AppNavigator from './src/navigation';
let sagaMiddleware = createSagaMiddleware();

const store = configureStore(sagaMiddleware);
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ApplicationProvider
          {...eva}
          theme={{...eva.light, ...theme}}
          customMapping={mapping}>
          <AppNavigator />
        </ApplicationProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;

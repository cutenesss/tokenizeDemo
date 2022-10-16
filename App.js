import * as React from 'react';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

import mapping from './mapping.json';
import configureStore from './src/redux/store';
import AppNavigator from './src/navigation';
import * as i18n from './src/translations';

// config store
const sagaMiddleware = createSagaMiddleware();
const store = configureStore(sagaMiddleware);
// init i18n
i18n;
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ApplicationProvider
          {...eva}
          theme={{...eva.light}}
          customMapping={mapping}>
          <AppNavigator />
        </ApplicationProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;

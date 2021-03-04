import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import Navigation from './navigaton';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;

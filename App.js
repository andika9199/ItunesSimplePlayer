import React from 'react';
import {Provider} from 'react-redux'
import store from './src/store'
import SearchScreen from './src/screens'

const App= () => {
  return (
    <Provider store={store}>
      <SearchScreen />
    </Provider>
  )
}

export default App;

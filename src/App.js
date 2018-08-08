import React, { Component } from 'react';
import { View } from 'react-native';
import InitialForm from './components/InitialForm';
import ChildForm from './components/ChildForm';
import ParentCreateForm from './components/ParentCreateForm';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <InitialForm />
      </Provider>      
    );
  }
}

export default App;
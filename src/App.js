import React, { Component } from 'react';
import { View } from 'react-native';
import InitialForm from './components/InitialForm';
import ParentForm from './components/ParentForm';
import ChildForm from './components/ChildForm';
import ParentCreateForm from './components/ParentCreateForm';

class App extends Component {
  render() {
    return (
      <View>
        <ParentCreateForm />
      </View>
    )
  }
}

export default App;
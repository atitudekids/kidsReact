import React, { Component } from 'react';
import { View } from 'react-native';
import InitialForm from './components/InitialForm';
import ChildForm from './components/ChildForm';
import CheckIn from './components/CheckIn';
import Chamada from './components/Chamada';

class App extends Component {
  render() {
    return (
      <View>
        <ChildForm />
      </View>
    )
  }
}

export default App;
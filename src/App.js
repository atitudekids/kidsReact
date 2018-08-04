import React, { Component } from 'react';
import { View } from 'react-native';
import InicialForm from './components/InicialForm';
import CheckIn from './components/CheckIn';
import Salas from './components/Salas';
import ResponsavelCreateForm from './components/ResponsavelCreateForm';

class App extends Component {
  render() {
    return (
      <View>
        <Salas />
      </View>
    )
  }
}

export default App;
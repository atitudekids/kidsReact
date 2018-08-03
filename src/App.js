import React, { Component } from 'react';
import { View } from 'react-native';
import InicialForm from './components/InicialForm';
import ResponsavelForm from './components/ResponsavelForm';
import AlocarCrianca from './components/AlocarCrianca';
import ResponsavelCreateForm from './components/ResponsavelForm';

class App extends Component {
  render() {
    return (
      <View>
        <ResponsavelCreateForm />
      </View>
    )
  }
}

export default App;
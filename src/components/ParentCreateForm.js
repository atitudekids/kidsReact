import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Header, Item, Label, Text, Card, CardItem, DatePicker,Input } from 'native-base';
import { parentCreate } from '../actions';

class ParentCreateForm extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      chosenDate: new Date(),
      identificacao: '', 
      nome: '', 
      telefone: '', 
      email: '' 
    };
    this.setDate = this.setDate.bind(this);
  }

  onButtonPress() {
    const { nome, identificacao, telefone, email } = this.state;

    this.props.parentCreate({ nome, identificacao, telefone, email });
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  render() {
    return (
      <Form style={styles.form}>
        <Header>
          <Text>Cadastro De Responsável</Text>
        </Header>
        <Item floatingLabel style={styles.item}>
          <Label>CPF</Label>
          <Input onChangeText={(text) => this.setState({ identificacao: text }) }
           value={this.state.identificacao} />
        </Item>
        <Item floatingLabel style={styles.item}>
          <Label>Nome</Label>
          <Input  onChangeText={ (text) => this.setState({ nome: text })  }
            value={this.state.nome} />
        </Item>
        <Item floatingLabel style={styles.item}>
          <Label>Email</Label>
          <Input  onChangeText={ (text) => this.setState({ email: text })  }
            value={this.state.email} />
        </Item>
        <Item floatingLabel style={styles.item}>
          <Label>Telefone</Label>
          <Input  onChangeText={ (text) => this.setState({ telefone: text })  }
            value={this.state.telefone} />
        </Item>

        <Card style={styles.card}>
          <CardItem header bordered>
            <Text>Criança(s)</Text>
          </CardItem>
          <CardItem>
            <Item floatingLabel>
              <Label>Nome</Label>
              <Input value={this.props.name} />
            </Item>
          </CardItem>
          <CardItem>
            <Item picker>
              <Label>Nascimento</Label>
              <DatePicker
                defaultDate={new Date(2006, 1, 1)}
                minimumDate={new Date(2005, 12, 31)}
                maximumDate={new Date(2018, 12, 31)}
                locale={"pt"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                textStyle={{ color: "gray" }}
                onDateChange={this.setDate}
                />
            </Item>
          </CardItem>
        </Card>
        <Button 
          rounded block info
          onPress={this.onButtonPress.bind(this)}
          style={styles.card} >
          <Text>Salvar</Text>
        </Button>
        <Button 
          disabled rounded block
          style={styles.card} >
          <Text>Adicionar Criança</Text>
        </Button>
      </Form>
    );
  }
}

const styles = {
  form:{
    marginTop: 10,
    marginRight: 10
  },
  item:{
    marginTop: 20
  },
  card:{
    marginTop: 20,
    marginLeft: 15,
    marginRight: 5
  },
  picker:{
    marginLeft: 14,
    marginTop: 20
  },
  button:{
    marginTop: 20
  }
};

const mapStateToProps = (state) => {
  const { nome, identificacao, telefone, email } = state;
  return { nome, identificacao, telefone, email };
};

export default connect(mapStateToProps, {
  parentCreate
})(ParentCreateForm);

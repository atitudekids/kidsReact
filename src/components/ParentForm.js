import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Header, Item, Label, Text, Card, CardItem, DatePicker } from 'native-base';


class ParentForm extends Component {

  render() {
    return (
      <Form style={styles.form}>
        <Header>
          <Text>Alocar Criança(s) Na(s) Sala(s)</Text>
        </Header>
        <Item floatingLabel style={styles.item}>
          <Label>Nome do Responsável</Label>
          {/* <Input value={this.props.name} /> */}
        </Item>

        <Item floatingLabel style={styles.item}>
          <Label>Telefone</Label>
          {/* <Input value={this.props.phone} /> */}
        </Item>

        <Card style={styles.card}>
          <CardItem header bordered>
            <Text>Criança(s)</Text>
          </CardItem>
          <CardItem>
            <Item floatingLabel>
              <Label>Nome</Label>
              {/* <Input value={this.props.name} /> */}
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
        <Button rounded block info style={styles.card}>
          <Text>Salvar</Text>
        </Button>
        <Button disabled rounded block style={styles.card}>
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

export default ParentForm;

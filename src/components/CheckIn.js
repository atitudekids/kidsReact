import React, { Component } from "react";
import {
  Form,
  Header,
  List,
  ListItem,
  Title,
  Card,
  Text,
  Left,
  Right,
  Radio,
  CardItem
} from "native-base";

class CheckIn extends Component {
  render() {
    return (
      <Form>
        <Header>
          <Title>Check In</Title>
        </Header>
        <List>
          <ListItem style={styles.item}>
            <Text>CPF</Text>
          </ListItem>
          <ListItem style={styles.item}>
            <Text>Nome</Text>
          </ListItem>
          <ListItem style={styles.item}>
            <Text>Telefone</Text>
          </ListItem>
        </List>
        <Card style={styles.card}>
          <CardItem header bordered>
            <Text>Criança(s)</Text>
          </CardItem>
          <CardItem>
            <Left>
              <Text>Nome </Text>
              <Text>Idade</Text>
            </Left>
            <Right>
              <Radio selected={false} />
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Text>Nome </Text>
              <Text>Idade</Text>
            </Left>
            <Right>
              <Radio selected={true} />
            </Right>
          </CardItem>
        </Card>
      </Form>
    );
  }
}

const styles = {
  item: {
    marginRight: 15
  },
  separator: {
    marginTop: 20
  },
  card:{
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15
  },
};

export default CheckIn;

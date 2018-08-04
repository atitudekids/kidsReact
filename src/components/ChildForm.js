import React, { Component } from 'react';
import { Form, Header, List, ListItem, Title,  Card, CardItem, Text
    } from 'native-base';

class ChildForm extends Component {

  render() {
    return (
      <Form>
        <Header>
          <Title>Alocar criança na sala!</Title>
        </Header>
            
        <Card style={styles.card}>
          <CardItem>
            <List>
              <ListItem><Text>CPF</Text></ListItem>
              <ListItem><Text>Nome</Text></ListItem>
              <ListItem><Text>Telefone</Text></ListItem>
            </List>
          </CardItem>
          <CardItem>
            
          </CardItem>
        </Card>
      </Form>
    );
  }
};

const styles = {
  card:{
    marginTop: 20
  }
};

export default ChildForm;
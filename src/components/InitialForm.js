import React, { Component } from 'react';
import Communications from 'react-native-communications';
import { Form, Header, Button, Title, Text, Item, Card, CardItem, 
    Label, Left, Icon, Body, Right
    } from 'native-base';


class InitialForm extends Component {

    render() {
        return (
            <Form>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Bem-vindo</Title>
                    </Body>
                    <Right />
                </Header>

                <Card style={styles.card}>
                    <CardItem>
                        <Item floatingLabel style={styles.item}>
                            <Label>CPF do responsável</Label>
                            {/* <Input value={this.props.cpf} /> */}
                        </Item>
                    </CardItem>
                    <Button block rounded info
                        style={styles.button}>
                        <Text>Buscar</Text>
                    </Button>
                </Card>

            </Form>
        );
    }
}

const styles = {
    button:{
      marginTop: 40,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 20
    },
    card:{
        marginTop: 90,
        marginLeft: 15,
        marginRight: 15
    }
};

export default InitialForm;
import React, { Component } from 'react';
import { Form, Header, Button, Title, Text, Item, Card, CardItem, Label
} from 'native-base';


class Chamada extends Component {

    render() {
        return (
            <Form>
                <Header>
                    <Title>Lista de Crianças</Title>
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
                        <Text>Prosseguir</Text>
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

export default Chamada;
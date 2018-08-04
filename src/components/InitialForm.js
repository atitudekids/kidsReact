import React, { Component } from 'react';
import Communications from 'react-native-communications';
import { Form, Header, Button, Title, Text, Item, Card, CardItem, Label,
    Footer, FooterTab} from 'native-base';


class InitialForm extends Component {
    onTextPress() {
        Communications.text( `Favor comparecer ao salão kids.`);
    }

    render() {
        return (
            <Form>
                <Header>
                    <Title>Bem-vindo!</Title>
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
             
                <Footer style={styles.footer}>
                    <FooterTab>
                        <Button>
                            <Text>Chamada</Text>
                        </Button>
                        <Button
                            onPress={this.onTextPress.bind(this)}>
                            <Text>Enviar msg</Text>
                        </Button>
                    </FooterTab>
                </Footer>
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
    footer:{
        marginTop: 280
    },
    card:{
        marginTop: 90,
        marginLeft: 15,
        marginRight: 15
    }
};

export default InitialForm;
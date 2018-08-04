import React, { Component } from "react";
import {
  Form,
  Header,
  Picker,
  Text,
  Item,
  Title,
  Label,
  Button,
  Card
} from "native-base";

class Salas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <Form>
        <Header>
          <Title>Salas</Title>
        </Header>

        <Card style={styles.card}>
          <Item picker style={styles.picker}>
            <Label>Salas</Label>
            <Picker
              mode="dropdown"
              style={{ width: undefined }}
              placeholder="Choose one"
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="sala1" value="sala1" />
              <Picker.Item label="sala2" value="sala2" />
              <Picker.Item label="sala3" value="sala3" />
              <Picker.Item label="sala4" value="sala4" />
              <Picker.Item label="sala5" value="sala5" />
            </Picker>
          </Item>

          <Button block rounded info style={styles.button}>
            <Text>Prosseguir</Text>
          </Button>
        </Card>
      </Form>
    );
  }
}

const styles = {
  picker: {
    marginLeft: 14,
    marginRight: 14,
    marginTop: 20
  },
  button: {
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20
  },
  card: {
    marginTop: 90,
    marginLeft: 15,
    marginRight: 15
  }
};

export default Salas;

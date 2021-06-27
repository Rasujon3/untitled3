import React, {Component} from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';
import {error} from 'eslint';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
        };
    }

    DataPost = () => {
        let URL = 'http://apishooter.com/postSimpleString';
        let ConfigHeader = {Accept: 'application/json', 'Content-type': 'application/json'};
        let ConfigBody = JSON.stringify({text: this.state.name});
        let config = {method: 'POST', header: ConfigHeader, body: ConfigBody};

        fetch(URL, config)
            .then((response) => response.text())
            .then((responseData) => {
                Alert.alert(responseData);
            })
            .catch((error) = {});
    };

    render() {
        return (
            <View style={{margin: 20}}>
                <TextInput onChangeText={(text) => {
                    this.setState({name: text});
                }} style={{borderWidth: 1, marginBottom: 10}}/>
                <Button onPress={this.DataPost} title="Post" />

            </View>
        );
    }
}

export default App;

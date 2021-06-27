import React, {Component} from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: ""
        };
    }

    DataPost = () => {
        let URL = "http://apishooter.com/deletePersonById";
        let ConfigHeader = {Accept: 'application/json',
            'content-type': 'application/json'};
        let ConfigBody = JSON.stringify({
            id: this.state.id,

        });
        let config = {method: 'POST', header: ConfigHeader, body: ConfigBody};

        fetch(URL, config)
            .then((response) => response.text())
            .then((responseData) => {
                Alert.alert(responseData)
            })
            .catch((error)=>{})

    };

    render() {
        return (
            <View style={{margin: 20}}>
                <TextInput placeholder="ID" onChangeText={(text) => {
                    this.setState({id: text});
                }} style={{borderWidth: 1, marginBottom: 10}}/>



                <Button onPress={this.DataPost} title="Post" />

            </View>
        );
    }
}

export default App;

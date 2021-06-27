import React, {Component} from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            city: "",
            mobile: "",
            id: ""
        };
    }

    DataPost = () => {
        let URL = "http://apishooter.com/updatePersonById";
        let ConfigHeader = {Accept: 'application/json',
            'Content-type': 'application/json'};
        let ConfigBody = JSON.stringify({
            id: this.state.id,
            name: this.state.name,
            age: this.state.age,
            city: this.state.city,
            mobile: this.state.mobile

        });
        let config = {method: 'POST', header: ConfigHeader, body: ConfigBody};

        fetch(URL, config)
            .then((response) => response.text())
            .then((responseData) => {
                Alert.alert(responseData)
            })

    };

    render() {
        return (
            <View style={{margin: 20}}>
                <TextInput placeholder="ID" onChangeText={(text) => {
                    this.setState({id: text});
                }} style={{borderWidth: 1, marginBottom: 10}}/>

                <TextInput placeholder="Name" onChangeText={(text) => {
                    this.setState({name: text});
                }} style={{borderWidth: 1, marginBottom: 10}}/>

                <TextInput placeholder="Age"  onChangeText={(text) => {
                    this.setState({age: text});
                }} style={{borderWidth: 1, marginBottom: 10}}/>

                <TextInput placeholder="City"  onChangeText={(text) => {
                    this.setState({city: text});
                }} style={{borderWidth: 1, marginBottom: 10}}/>

                <TextInput placeholder="Mobile"  onChangeText={(text) => {
                    this.setState({mobile: text});
                }} style={{borderWidth: 1, marginBottom: 10}}/>



                <Button onPress={this.DataPost} title="Post" />

            </View>
        );
    }
}

export default App;

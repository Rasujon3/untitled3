import React, {Component} from 'react';
import {View, Text, Button,Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


class App extends Component {

    constructor() {
        super();
        this.state = {
            NameData: "........."
        }
    }

    saveData = async() => {

        try {
            await AsyncStorage.setItem('nameKey', 'Bd is my country');
            Alert.alert('Data Saved');
        } catch (e) {
            Alert.alert('Data Save failed! Try again');
        }

    }

    getData = async() => {

        try {
            let NameGet = await AsyncStorage.getItem('nameKey');
            this.setState({NameData:NameGet});
        } catch (e) {
            Alert.alert('Data Get failed!');
        }

    }

    render() {
        return (
            <View>

                <View style={{margin: 10}}>
                    <Button onPress={this.saveData} title="Save"/>
                </View>

                <View style={{margin: 10}}>
                    <Button onPress={this.getData} title="Get"/>
                </View>

                <View style={{margin: 10}}>
                    <Text style={{fontSize: 30}}>{this.state.NameData}</Text>
                </View>


            </View>
        );
    }
}

export default App;

import React, {Component} from 'react';
import {View, Text, Button, Alert, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


class App extends Component {

    constructor() {
        super();
        this.state = {
            AllData: '.........',

            NameData: ' ',
            RollData: ' ',
            ClassData: ' ',
        };
    }

    saveData = async () => {

        try {
            var AllDataArray = [this.state.NameData, this.state.RollData, this.state.ClassData];
            var AllDataArrayString = AllDataArray.toString();
            await AsyncStorage.setItem('AllDataKey', AllDataArrayString);
            Alert.alert('Data Saved');

        } catch (e) {
            Alert.alert('Data Save failed! Try again');
        }

    };

    getData = async () => {

        try {
           var selectedData = await AsyncStorage.getItem('AllDataKey');
            this.setState({AllData:selectedData});
        } catch (e) {
            Alert.alert('Data Get failed!');
        }

    };

    deleteData = async () => {

        try {
            // await AsyncStorage.removeItem('nameKey');
            await AsyncStorage.clear();
            Alert.alert('Data Deleted Successfully!');
        } catch (e) {
            Alert.alert('Data Delete failed!');
        }

    };

    render() {
        return (
            <View>

                <View style={{margin: 10}}>
                    <TextInput onChangeText={(text) => {
                        this.setState({NameData: text});
                    }} style={{padding: 5, height: 40, borderColor: 'blue', borderWidth: 1}} placeholder="Your Name"/>
                </View>

                <View style={{margin: 10}}>
                    <TextInput onChangeText={(text) => {
                        this.setState({RollData: text});
                    }} style={{padding: 5, height: 40, borderColor: 'blue', borderWidth: 1}} placeholder="Your Roll"/>
                </View>

                <View style={{margin: 10}}>
                    <TextInput onChangeText={(text) => {
                        this.setState({ClassData: text});
                    }} style={{padding: 5, height: 40, borderColor: 'blue', borderWidth: 1}} placeholder="Your Class"/>
                </View>

                <View style={{margin: 10}}>
                    <Button onPress={this.saveData} title="Save"/>
                </View>

                <View style={{margin: 10}}>
                    <Button onPress={this.getData} title="Get"/>
                </View>

                <View style={{margin: 10}}>
                    <Button onPress={this.deleteData} title="Delete"/>
                </View>

                <View style={{margin: 10}}>
                    <Text style={{fontSize: 30}}>{this.state.AllData}</Text>
                </View>


            </View>
        );
    }
}

export default App;

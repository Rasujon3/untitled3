import React, {Component} from 'react';
import {View, Text} from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{flex:100,alignItems:'flex-end',justifyContent:"space-evenly",flexDirection:'row'}}>
                <View style={{width:"10%",height:"10%",backgroundColor:"red"}}></View>
                <View style={{width:"10%",height:"10%",backgroundColor:"green"}}></View>
                <View style={{width:"10%",height:"10%",backgroundColor:"yellow"}}></View>
            </View>
        );
    }
}

export default App;

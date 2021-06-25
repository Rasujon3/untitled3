import React, {Component} from 'react';
import {View, Text} from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{flex:100,flexDirection:'row'}}>
                <View style={{alignSelf:'flex-end',width:"10%",height:"10%",backgroundColor:"red"}}></View>

            </View>
        );
    }
}

export default App;

import React, {Component} from 'react';
import {View, Text} from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{flex:100,alignItems:'center',flexDirection:'column'}}>
                <View style={{position:'absolute',backgroundColor:"red",width:"100%",height:"40%",}}></View>
                <View style={{position:'relative',marginTop:"20%",backgroundColor:"yellow",width:"90%",height:"40%",}}></View>

            </View>
        );
    }
}

export default App;

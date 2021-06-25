import React, {Component} from 'react';
import {View, Text} from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={{flex:100}}>
                <View style={{backgroundColor:"red",flex:50}}>

                  <View style={{backgroundColor:"white",flex:38}}></View>

                  <View style={{flexDirection:"row",backgroundColor:"black",flex:12}}>
                    <View style={{backgroundColor:"yellow",flex:4}}></View>
                    <View style={{backgroundColor:"pink",flex:4}}></View>
                    <View style={{backgroundColor:"red",flex:4}}></View>
                  </View>

                </View>


              <View style={{backgroundColor:"black",flex:50}}>

                <View style={{flexDirection:"row",backgroundColor:"black",flex:25}}>
                  <View style={{backgroundColor:"green",flex:8}}></View>
                  <View style={{backgroundColor:"black",flex:8}}></View>
                  <View style={{backgroundColor:"teal",flex:8}}></View>
                </View>

                <View style={{flexDirection:"row",backgroundColor:"blue",flex:25}}>
                  <View style={{backgroundColor:"red",flex:8}}></View>
                  <View style={{backgroundColor:"green",flex:8}}></View>
                  <View style={{backgroundColor:"yellow",flex:8}}></View>

                </View>

              </View>

            </View>
        );
    }
}

export default App;

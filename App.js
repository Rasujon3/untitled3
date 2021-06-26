import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';

class App extends Component {

    constructor() {
        super();
        this.state={
            SimpleData:"..."
        }
    }

    CallMyFirstAPI=()=>{
        let URL = "http://apishooter.com/getSimpleString";
        let config = {Method:'GET'};

        fetch(URL,config)
            .then((responseInitial)=>responseInitial.text())
            .then((responseFinal)=>{
                this.setState({SimpleData:responseFinal})
            })
            .catch((error)=>{
                this.setState({SimpleData:"Server Error"})
            })
    }

    render() {
        return (
            <View>
                <Text style={{fontSize:40}}>{this.state.SimpleData}</Text>
                <Button onPress={this.CallMyFirstAPI} title="Call"/>
            </View>
        );
    }
}

export default App;

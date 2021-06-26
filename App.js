import React, {Component} from 'react';
import {View, Text, Button, ActivityIndicator} from 'react-native';

class App extends Component {

    constructor() {
        super();
        this.state = {
            SimpleData: '...',
            loading: false,
        };
    }

    CallMyFirstAPI = () => {
        this.setState({loading: true});
        let URL = 'http://apishooter.com/getSimpleString';
        let config = {Method: 'GET'};

        fetch(URL, config)
            .then((responseInitial) => responseInitial.headers.get('cache-control'))
            .then((responseFinal) => {
                this.setState({SimpleData: responseFinal});
            })
            .catch((error) => {
                this.setState({SimpleData: 'Server Error'});
            }).finally(() => {
            this.setState({loading: false});
        });
    };

    render() {
        if (this.state.loading === true) {
            return (
                <View>
                    <ActivityIndicator size="large" color="#ff2233"/>
                </View>
            );
        } else {
            return (
                <View>
                    <Text style={{fontSize: 40}}>{this.state.SimpleData}</Text>
                    <Button onPress={this.CallMyFirstAPI} title="Call"/>

                </View>
            );
        }

    }
}

export default App;

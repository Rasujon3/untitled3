import React, {Component} from 'react';
import {View, Text, Image, FlatList, ActivityIndicator, Alert} from 'react-native';

class App extends Component {

    constructor() {
        super();
        this.state = {
            DATA: [],
            loading: true,
            refreshLoader: false,
        };
    }

    componentDidMount = () => {
        this.onAPICall();

    };

    ChildView = ({img, title, short_des}) => {
        return (
            <View style={{marginBottom: 40, width: '100%'}}>
                <Image style={{width: '100%', height: 200}} source={{uri: img}}/>
                <Text style={{fontSize: 22}}>{title}</Text>
                <Text style={{fontSize: 14}}>{short_des}</Text>
            </View>
        );
    };

    PullRefresh = () => {
        this.onAPICall();
        Alert.alert('Hi');
    };

    onAPICall = () => {
        let url = 'http://apishooter.com/getArticleList';
        let config = {method: 'GET'};
        fetch(url, config)
            .then((result) => result.json())
            .then((response) => {
                this.setState({DATA: response, loading: false});
            }).catch((error) => {
            Alert.alert('Internet Connection error');
            this.setState({loading: false});
        })

            .finally(() => {
                this.setState({loading: false});
            });
    };

    render() {

        if (this.state.loading === true) {
            return (
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                    <ActivityIndicator size="large" color="#ff2233"/>
                </View>
            );
        } else {
            return (
                <View>
                    <FlatList
                        onRefresh={() => this.PullRefresh()}
                        refreshing={this.state.refreshLoader}
                        data={this.state.DATA}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({item}) => <this.ChildView
                            title={item.title}
                            img={item.img}
                            short_des={item.short_des}/>}

                    />

                </View>
            );
        }


    }
}

export default App;

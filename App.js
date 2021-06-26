import React, {Component} from 'react';
import {View, Text, Image, FlatList, ActivityIndicator, Alert} from 'react-native';

class App extends Component {

    DATA = [
        {
            id: 1,
            title: 'What is global warming, explained',
            img: 'https://cdn.pixabay.com/photo/2017/02/03/10/45/global-warming-2034896__480.jpg',
            short_des: 'Glaciers are melting, sea levels are rising, cloud forests are dying, and wildlife is scrambling to keep pace. It has become clear that humans have caused most of the past century\'s warming',

        },

        {
            id: 2,
            title: 'What is global warming, explained',
            img: 'https://cdn.pixabay.com/photo/2017/02/03/10/45/global-warming-2034896__480.jpg',
            short_des: 'Glaciers are melting, sea levels are rising, cloud forests are dying, and wildlife is scrambling to keep pace. It has become clear that humans have caused most of the past century\'s warming',

        },
    ];

    constructor() {
        super();
        this.state = {
            DATA: [],
            loading: true,
        };
    }

    componentDidMount = () => {
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

    ChildView = ({img, title, short_des}) => {
        return (
            <View style={{margin: '2.5%', width: '100%', height: 200}}>
                <Image style={{width: '95%', height: 130}} source={{uri: img}}/>
                <Text style={{fontSize: 18}}>{title}</Text>
                <Text style={{fontSize: 12}}>{short_des}</Text>
            </View>
        );
    };

    render() {

        if (this.state.loading === true) {
            return (
                <View style={{flex:1,flexDirection:'column',justifyContent:'center'}}>
                    <ActivityIndicator size="large" color="#ff2233"/>
                </View>
            );
        } else {
            return (
                <View>
                    <FlatList
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

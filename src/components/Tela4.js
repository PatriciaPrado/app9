import React, { Component } from 'react';
import { StatusBar, Text, View } from 'react-native';

export default class Tela4 extends Component {

    static navigationOptions = {
        title: 'Tela4',
        headerStyle: {
            backgroundColor: '#fa511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
            fontWeight: 'bold'
        }
    }
    
    render () {
        return (
            <View>
                <Text>Tela 4</Text>
            </View>
        )
    }
}
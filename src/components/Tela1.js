import React, { Component } from 'react';
import { StatusBar, Text, View } from 'react-native';

export default class Tela1 extends Component {

    static navigationOptions = {
        title: 'Tela1',
        headerStyle: {
            backgroundColor: '#fa511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
            fontWeight: 'bold'
        }
    }

    render () {

       // const pessoa = this.props.navigation.getParam('dados');
        const {nome, idade} = this.props.navigation.getParam('dados');

        return (
            <View>
                <Text>Tela 1</Text>
                {/* <Text>Nome: {pessoa.nome} </Text>
                <Text>Idade: {pessoa.idade} </Text> */}
                <Text>Nome: {nome} </Text>
                <Text>Idade: {idade} </Text>
            </View>
        )
    }
}
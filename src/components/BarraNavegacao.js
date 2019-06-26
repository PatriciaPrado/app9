import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


const estilo = StyleSheet.create({
    barraTitulo:{
        backgroundColor: '#cccc',
        padding: 10,
        height: 60
    },
    titulo:{
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    }
})

export default class BarraNavegacao extends Component {
    rnder (){
        return(
            <View style={estilo.barraTitulo}>
                <Text style={estilo.titulo}>Meu aplicativo</Text>
            </View>
        )
    }
}

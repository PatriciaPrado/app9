import React, {Component} from 'react'; 
import {Button, View} from 'react-native';

export default class Home extends Component {

    // Serve para criar os paramentros de rota
    // É possível estilizar a barra do menu

    static navigationOptions = {
        title: 'HOME',
        headerStyle: {
            backgroundColor: '#0d72c4'
        },
        headerTintColor: '#a5a010',
        fontSize: 18,
        headerTitleStyle:{
            fontWeight: 'bold'
        }
    }

    render() {

      // Usa o NAVIGATE da propriedade NAVIGATION
      // É utilizada para navegar entre as telas, basta informar o nome da rota e os dados a serem enviados {navigate('Tela1', {dados: pessoa})}}
      const {navigate} = this.props.navigation;

        const pessoa = {
            nome: 'Patrícia',
            idade: 54
        }

        return (
          <View>
            <Button onPress={() => {navigate('Tela1', {dados: pessoa})}} title="Tela 1" />
            <Button onPress={() => {navigate('Tela2')}} title="Tela 2" />
            <Button onPress={() => {navigate('Tela3')}} title="Tela 3" />
            <Button onPress={() => {navigate('Tela4')}} title="Tela 4" />
          </View>
        );
      }
}
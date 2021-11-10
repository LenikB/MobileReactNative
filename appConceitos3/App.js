import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
 
class App extends Component{
  render(){
    return(
      <View>
        <Text style={{ fontSize: 25, marginTop: 50, marginLeft: 145}}> Meu Perfil</Text>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/66499233?v=4'}}
          style={{ width: 300, height: 300, margin: 50, marginTop: -5}}
        />
        <Text style={{fontSize: 20}}>
          Dados Pessoais:
        </Text>
        <Text>
          Nome: Vinicius Galvao de Franca
        </Text>
        <Text style={{fontSize: 20}}>
          Formacao: 
        </Text>
        <Text>
          Cursando ADS
        </Text>
        <Text style={{fontSize: 20}}>
          Experiencia:
        </Text>
        <Text>
          ServiceNow - 1 Ano
        </Text>
        <Text style={{fontSize: 20}}>
          Projetos: 
        </Text>
        <Text>
          Amil, Equatorial Energia, Accenture, SAP
        </Text>
      </View>
    )
  }
}
 
export default App;

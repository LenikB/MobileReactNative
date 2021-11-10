import React, { Component } from 'react';

import { StyleSheet, View, Button, Text, Image } from 'react-native';
 
export default class MyProject extends Component {

  constructor(){

    super();

    this.state={

      // This is our Default number value
      NumberHolder : 1

    }
  }

GenerateRandomNumber=()=>
{

var RandomNumber = Math.floor(Math.random() * 10) ;

this.setState({

  NumberHolder : RandomNumber

})
}

  render() {
    return (
   
      <View style={styles.MainContainer} >

      <Image
          source={{ uri: 'https://i.pinimg.com/236x/0c/91/93/0c919365dca9ad436c94c9e762f9cc10.jpg'}}
          style={{ width: 300, height: 300, margin: 50, marginTop: -5}}
        />

       <Text style={{marginBottom: 10, fontSize: 20}}>{this.state.NumberHolder}</Text>

       <Button title="Gerar numero aleatorio" onPress={this.GenerateRandomNumber} />
        
      </View>

    );
  }
}

const styles = StyleSheet.create(
{
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

});
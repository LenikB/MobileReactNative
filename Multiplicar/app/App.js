import React, { useState, Component } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image} from 'react-native';
 

export default function App(){
  

    const [valor1, setValor1]=useState(0)
    const [valor2, setValor2]=useState(0)
    const [resultado, setResultado]=useState(0)
   
    const dividir = () => {
      setResultado(parseInt(valor1)*parseInt(valor2))
    }

   

  return (
    <View>

    <Text style={styles.titulo}>Multiplicador</Text>

    <TextInput 
    style={styles.texto} 
    onChangeText={(texto) => {setValor1(texto)}}
    placeholder='Numero 1'>
    </TextInput>


    <TextInput 
    style={styles.texto} 
    onChangeText={(texto) => {setValor2(texto)}}
    placeholder='Numero 2'>
    </TextInput>

    <Text style={styles.texto}> {resultado} </Text>

    <Pressable style={styles.botao, {backgroundColor:'#00AB6F'}} 
    onPress={() => dividir() }>
        <Text style={styles.textoBotao}>Calcular</Text>
      </Pressable>
     
    
    </View>


  )
} 

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },

  titulo:{
    textAlign: 'center',
    fontSize: 50,
    marginTop: 100
  },
  texto:{
    textAlign: 'center',
    fontSize: 35,
    borderColor: '#00AB6F',
    borderRadius: 10,
    borderWidth: 2,
    padding: 15,
  },
  botao:{
    width: 200,
    height: 50,
    marginStart: 120,
    marginTop: 20,
    
  },
  textoBotao:{
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 45,
    fontSize: 30,
    color: 'white'
  }


})
 

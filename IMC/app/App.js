import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
class Inputs extends Component {
   state = {
      height: '',
      weight: '',
      bmi: '',
      BmiResult: '',
   }
   handleHeight = (text) => {
      this.setState({ height: text })
   }
   handleWeight = (text) => {
      this.setState({ weight: text })
   }
   calculate = (height, weight) => {
      //calculation
      var result = (parseFloat(weight)*10000)/(parseFloat(height)*parseFloat(height));
      result = result.toFixed(2);
      //display result
      this.setState({ bmi: result })
      if(result<18.5){
         this.setState({BmiResult:'Magreza'})
      }
      else if(result>=18.5&&result<25){
         this.setState({BmiResult:'Normal'})
      }
      else if(result>=25&&result<30){
         this.setState({BmiResult:'Sobrepeso'})
      }
      else if(result>=30){
         this.setState({BmiResult:'Obeso'})
      }
      else{
         alert('Valores incorretos!');
         this.setState({BmiResult:''})
      }
   }
   render() {
      return (
         <View style = {styles.container}>
<Text style={styles.title}>Calculadora IMC</Text>
            
            <Text  style = {styles.label}>Peso</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Altura em Cm"
               autoCapitalize = "none"
               onChangeText = {this.handleHeight}/>
<Text  style = {styles.label}>Altura</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Peso em Kg"
               autoCapitalize = "none"
               onChangeText = {this.handleWeight}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.calculate(this.state.height, this.state.weight)
               }>
               <Text style = {styles.submitButtonText}> Calcular </Text>
            </TouchableOpacity>
<Text style = {styles.output}>{this.state.bmi}</Text>
            <Text style = {styles.resultText}>{this.state.BmiResult}</Text>
</View>
      )
   }
}
export default Inputs
const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      
   },
   input: {
      margin: 15,
      height: 40,
      borderWidth: 1,
      padding: 10,
   },
   submitButton: {
      backgroundColor: '#2f2fa2',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      textAlign: "center",
      color: 'white',
     fontWeight:"bold",
      fontSize: 18,
   },
   output:{
      textAlign: "center",
      fontSize: 30,
   },
   title:{
      paddingTop:30,
      paddingBottom:10,
      textAlign: "center",
      fontSize: 30,
      fontWeight:"bold",
   },
   resultText:{
      paddingTop:20,
      paddingBottom:10,
      textAlign: "center",
      fontSize: 30,
      color: 'blue'
   },
   label:{
      marginLeft: 15,
   }
})
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
 
class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.texto}>Anuncios</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

          
          <View style={styles.box}>
          <Image
          source={{ uri: 'https://s2.glbimg.com/A9UbOT66bw7kqdr367utaTiPsGk=/620x413/smart/e.glbimg.com/og/ed/f/original/2020/12/21/5-coisas-que-vao-te-fazer-sonhar-com-esta-casa-de-praia-contemporanea-7.jpg'}}
          style={{ width: 200, height: 200, marginLeft: 20, marginTop: 20}}
          />
          <Text style={styles.text}>Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Quisque luctus efficitur 
          est at condimentum. Nullam quis nibh vel risus posuere mattis. 
          Pellentesque eget enim dui. Proin tincidunt nec odio nec venenatis. 
          Duis vel nunc nisl. Integer leo nisl, lacinia sed tincidunt sed, 
          iaculis vel ipsum. Ut pretium tortor eget urna hendrerit elementum. </Text>
          </View>
          <View style={styles.box}>
          <Image
          source={{ uri: 'https://img.r7.com/images/casa-3d-02022021160100350?dimensions=677x369&&&&&&resize=677x369&crop=384x209+0+10'}}
          style={{ width: 200, height: 200, marginLeft: 20, marginTop: 20}}
          />
          <Text style={styles.text}>Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Quisque luctus efficitur 
          est at condimentum. Nullam quis nibh vel risus posuere mattis. 
          Pellentesque eget enim dui. Proin tincidunt nec odio nec venenatis. 
          Duis vel nunc nisl. Integer leo nisl, lacinia sed tincidunt sed, 
          iaculis vel ipsum. Ut pretium tortor eget urna hendrerit elementum. </Text>
          </View>
          <View style={styles.box}>
          <Image
          source={{ uri: 'https://www.decorfacil.com/wp-content/uploads/2017/03/20171011fachada-casa-simples-pequena-99-960x600.jpg'}}
          style={{ width: 200, height: 200, marginLeft: 20, marginTop: 20}}
          />
          <Text style={styles.text}>Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Quisque luctus efficitur 
          est at condimentum. Nullam quis nibh vel risus posuere mattis. 
          Pellentesque eget enim dui. Proin tincidunt nec odio nec venenatis. 
          Duis vel nunc nisl. Integer leo nisl, lacinia sed tincidunt sed, 
          iaculis vel ipsum. Ut pretium tortor eget urna hendrerit elementum. </Text>
          </View>
          <View style={styles.box}>
          <Image
          source={{ uri: 'https://blog.friasneto.com.br/wp-content/uploads/2020/07/piracicaba-casa-condominio-residencial-terras-de-artemis-artemis-23-11-2019_11-02-08-0.jpg'}}
          style={{ width: 200, height: 200, marginLeft: 20, marginTop: 20}}
          />
          <Text style={styles.text}>Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Quisque luctus efficitur 
          est at condimentum. Nullam quis nibh vel risus posuere mattis. 
          Pellentesque eget enim dui. Proin tincidunt nec odio nec venenatis. 
          Duis vel nunc nisl. Integer leo nisl, lacinia sed tincidunt sed, 
          iaculis vel ipsum. Ut pretium tortor eget urna hendrerit elementum. </Text>
          </View>
          <View style={styles.box}>
          <Image
          source={{ uri: 'https://www.tuacasa.com.br/wp-content/uploads/2020/05/casa-de-campo-capa.jpg'}}
          style={{ width: 200, height: 200, marginLeft: 20, marginTop: 20}}
          />
          <Text style={styles.text}>Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Quisque luctus efficitur 
          est at condimentum. Nullam quis nibh vel risus posuere mattis. 
          Pellentesque eget enim dui. Proin tincidunt nec odio nec venenatis. 
          Duis vel nunc nisl. Integer leo nisl, lacinia sed tincidunt sed, 
          iaculis vel ipsum. Ut pretium tortor eget urna hendrerit elementum. </Text>
          </View>
          
          
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  text:{
    fontSize: 15
  },

  box:{
    marginTop: 60,
    //backgroundColor: 'red',
    height: 500,
    width: 250,
    borderColor: 'black',
    borderWidth:5,
    margin: 5
  },
  texto:{
    fontSize: 35,
    marginTop: 150,
    textAlign: 'center'
  }
})
 
export default App;

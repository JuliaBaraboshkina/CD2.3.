import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Button,Alert} from 'react-native';

export default function App() {
  function press(){
    Alert.alert("Поздравляем !", "Вы записались на марафон желаний")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Марафон желаний,не пропустите!</Text>
      <Image style={styles.logo}resizeMode='contain' source={{uri:'https://million-wallpapers.ru/wallpapers/4/96/517063138531628/molodaya-para-na-bumazhnom-samol-te-v-oblakax.jpg'}}/>
      <Button color='#38B8FF' title="Запись" onPress={press}/>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 300,
    height: 300,
  },
  text:{
    color:'#38B8FF',
    fontWeight: "bold",
    fontSize: 17,
      },

});
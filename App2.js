import { StatusBar } from 'expo-status-bar';
import {Alert, Button, StyleSheet, Text, View, ScrollView, Image} from 'react-native'
import Carousel, {Pagination} from 'react-native-snap-carousel'
import Constants from 'expo-constants'
import {useState} from 'react'

const data = [
  { 
    title: "Sims 2",
    body: "The Sims 2 значительно расширили жизненные этапы оригинальной игры. Он также представил механику старения серии. В результате в базовой игре было шесть этапов жизни, а расширение University Life — седьмое. Симы будут проходить через стадии младенца, малыша, ребенка, подростка, взрослого и, наконец, старшего. Если бы у вас была университетская экспансия, вы могли бы также испытать молодых взрослых этап. Ваши симы теперь также умрут от старости с ограничением продолжительности каждого этапа жизни.",
    img: "https://trikky.ru/wp-content/blogs.dir/1/files/2016/06/Halyava-The-Sims-2-origin-pesochnitsa-1408584.jpeg"
  },
  {
    title: "Sims 3",
    body: "The Sims 3 имеет в общей сложности семь этапов жизни: ребенок, малыш, ребенок, подросток, молодой взрослый, взрослый и старший. Это единственная игра для симов, в которой все эти этапы жизни доступны во время запуска базовой игры. Предыдущие игры требовали расширения для определенных этапов жизни, в то время как The Sims 4 вводили определенные этапы жизни только через несколько месяцев после запуска.. ",
    img: "http://s01.riotpixels.net/data/f8/dc/f8dc1aa5-8210-4cfa-8274-7443f0c13581.jpg/artwork.sims-3.1500x1500.2011-03-25.904.jpg"
  },
]

export default function App() {
  function press(){
    Alert.alert("", "Вы прошли экскурс в Sims")
  }
  const [activeSlide, setActiveSlide] = useState(0);
  const Render = ({item}) => {
    return (
        <ScrollView>
          <Text style={styles.header}>{item.title}</Text>
          <Image
              source={{uri: item.img}}
              style={styles.logo}
          />
          <Text style={styles.body}>{item.body}</Text>
        </ScrollView>
    );
  }

  return (
      <View style={styles.main}>
        <Carousel
            layout={"default"}
            data={data}
            renderItem={Render}
            sliderWidth={350}
            itemWidth={300}
            onSnapToItem={(index) => setActiveSlide(index)}
            containerCustomStyle={{overflow: "visible",marginVertical: 5}}
        />
        <Pagination
            dotsLength={data.length}
            activeDotIndex={activeSlide}
            dotStyle={{width: 7,height: 7,borderRadius: 10}}>
        </Pagination>
        <Button color='#38B8FF' title="Понятно, спасибо!" onPress={press}/>
      </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex:1,
    paddingTop: Constants.statusBarHeight,
  },
  logo: {
    width: 300,
    height: 300,
    marginLeft:-10,
  },
  header: {
    color: 'black',
    fontSize: 30,
    fontWeight: "bold",
    margin: 20,
    marginStart:93
  },
  body: {
    color: 'black',
    fontSize: 20,
    margin: 10,
    paddingRight: 20,
    textAlign: 'center',
  },
});
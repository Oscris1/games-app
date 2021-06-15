import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
//import { useNavigation, useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const itemWidth = (width - 40) / 2; // width - margins

const GamesListElement = ({ item }) => {
  const image = { uri: item.background_image };
  const navigation = useNavigation();
  //const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Game', { item: item })}
      style={styles.container}
      //onPress={() => navigation.navigate('Drink', { item: item })}
    >
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.ratingBox}>
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </ImageBackground>
      <View style={styles.box}>
        <Text style={styles.text}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: itemWidth,
    maxWidth: itemWidth,
    minWidth: itemWidth,
    margin: 10,
    overflow: 'hidden',
    //backgroundColor: '#0f171e',
  },
  image: {
    flex: 3,
    width: itemWidth,
    resizeMode: 'center',
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  ratingBox: {
    backgroundColor: 'green',
    position: 'absolute',
    borderBottomStartRadius: 5,
    right: 0,
    padding: 3,
  },
  ratingText: {
    color: '#fff',
    fontSize: 15,
  },
});

export default GamesListElement;

import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  ScrollView,
} from 'react-native';
import axios from 'axios';

import { gameDetailsURL } from '../api/api';

import { useRoute } from '@react-navigation/native';

const GameDetailsScreen = () => {
  const route = useRoute();
  const { item } = route.params;

  const [game, setGame] = useState('');

  const fetchGameDetail = async (game_id) => {
    console.log(game_id);
    console.log(gameDetailsURL(game_id));
    const response = await axios.get(gameDetailsURL(game_id));
    const data = await response.data;
    setGame(data);
  };

  useEffect(() => {
    fetchGameDetail(item.id);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{ uri: item.background_image }}
        style={styles.image}
      ></ImageBackground>

      <View style={styles.textContainer}>
        <Text style={styles.text}>{game.description_raw}</Text>
      </View>
    </ScrollView>
  );
};

export default GameDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#17171a',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  textContainer: {
    marginVertical: 20,
    paddingHorizontal: 15,
  },
  text: {
    color: '#fff',
  },
});

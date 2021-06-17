import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';

import RatingStars from '../components/RatingStars';
import Platform from '../components/Platform';

import { gameDetailsURL } from '../api/api';

const GameDetailsScreen = () => {
  const route = useRoute();
  const { item } = route.params;

  const [game, setGame] = useState('');
  const [platforms, setPlatforms] = useState([]);

  const fetchGameDetail = async (game_id) => {
    const response = await axios.get(gameDetailsURL(game_id));
    const data = await response.data;
    setGame(data);
    setPlatforms(data.platforms);
  };

  useEffect(() => {
    fetchGameDetail(item.id);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <RatingStars rating={item.rating} />
      <ImageBackground
        source={{ uri: item.background_image }}
        style={styles.image}
      ></ImageBackground>

      <View style={styles.platforms}>
        {platforms.map((data) => {
          return <Platform key={data.platform.id} data={data} />;
        })}
      </View>

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
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  text: {
    color: '#fff',
  },
  platforms: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'white',
  },
});

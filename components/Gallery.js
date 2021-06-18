import React, { useState, useEffect } from 'react';
import { FlatList, Dimensions, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

import axios from 'axios';
import { gameScreenshotURL } from '../api/api';

const { width, height } = Dimensions.get('screen');

const Gallery = () => {
  const route = useRoute();
  const { item } = route.params;

  const [screenshots, setScreenshots] = useState([]);

  const fetchGameScreenshots = async (game_id) => {
    const response = await axios.get(gameScreenshotURL(game_id));
    const data = await response.data;
    setScreenshots(data.results);
  };

  useEffect(() => {
    fetchGameScreenshots(item.id);
  }, []);
  return (
    <FlatList
      data={screenshots}
      horizontal
      pagingEnabled
      renderItem={({ item }) => {
        return <Image style={styles.image} source={{ uri: item.image }} />;
      }}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default Gallery;

const styles = StyleSheet.create({
  image: {
    width: width,
    height: 300,
    resizeMode: 'cover',
  },
});

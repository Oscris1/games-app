import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
} from 'react-native';
import axios from 'axios';

import { useRoute } from '@react-navigation/native';

const GameDetailsScreen = () => {
  const route = useRoute();
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: item.background_image }}
        style={styles.image}
      ></ImageBackground>
      <Text style={styles.text}>{item.name}</Text>
    </View>
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
  text: {
    color: '#fff',
  },
});

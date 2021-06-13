import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

import SearchBar from './components/SearchBar';
import GreenButton from './components/GreenButton';

import { popularGamesURL } from './api/api';

// TO DO: onPress button

export default function App() {
  const [popularGames, setPopularGames] = useState([]);

  const fetchGames = async () => {
    console.log(popularGamesURL());
    const response = await axios.get(popularGamesURL());
    const data = await response.data;
    setPopularGames(data);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Games info!</Text>
      </View>

      <SearchBar />

      <View style={styles.buttonContainer}>
        <GreenButton text='Popular' />
        <GreenButton text='New Games' />
        <GreenButton text='Upcoming Games' />
      </View>

      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#17171a',
    justifyContent: 'flex-start',
  },
  header: {
    alignItems: 'center',
  },
  headerText: {
    color: '#64ffda',
    fontSize: 25,
    fontWeight: '700',
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

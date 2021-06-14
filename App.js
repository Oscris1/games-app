import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';

import SearchBar from './components/SearchBar';
import GreenButton from './components/GreenButton';
import GamesListElement from './components/GamesListElement';

import { popularGamesURL } from './api/api';
import { upcomingGamesURL } from './api/api';
import { newGamesURL } from './api/api';

// TO DO: onPress button

export default function App() {
  const [popularGames, setPopularGames] = useState([]);
  const [upcomingGames, setUpcomingGames] = useState([]);
  const [newGames, setNewGames] = useState([]);
  const [games, setGames] = useState();

  // onPress Button
  const popularGamesHandler = () => setGames(popularGames);
  const upcomingGamesHandler = () => setGames(upcomingGames);
  const newGamesHandler = () => setGames(newGames);

  // Fetch games data
  const fetchGames = async () => {
    console.log(popularGamesURL());
    const response = await axios.get(popularGamesURL());
    const data = await response.data;
    console.log(data.results[0].name);
    setPopularGames(data.results);
    setGames(data.results);
  };

  const fetchUpcomingGames = async () => {
    console.log(upcomingGamesURL());
    const response = await axios.get(upcomingGamesURL());
    const data = await response.data;
    console.log(data.results[0].name);
    setUpcomingGames(data.results);
  };

  const fetchNewGames = async () => {
    console.log(newGamesURL());
    const response = await axios.get(newGamesURL());
    const data = await response.data;
    console.log(data.results[0].name);
    setNewGames(data.results);
  };

  useEffect(() => {
    fetchGames();
    fetchUpcomingGames();
    fetchNewGames();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Games info!</Text>
      </View>

      <SearchBar setGameshandler={setGames} />

      <View style={styles.buttonContainer}>
        <GreenButton text='Popular' onPress={popularGamesHandler} />
        <GreenButton text='New Games' onPress={newGamesHandler} />
        <GreenButton text='Upcoming Games' onPress={upcomingGamesHandler} />
      </View>

      <FlatList
        style={styles.gamesList}
        data={games}
        renderItem={({ item }) => <GamesListElement item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
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
  gamesList: {
    marginTop: 20,
  },
  whiteText: {
    color: '#fff',
  },
});

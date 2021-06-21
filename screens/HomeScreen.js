import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import axios from 'axios';

import SearchBar from '../components/SearchBar';
import GreenButton from '../components/GreenButton';
import GamesListElement from '../components/GamesListElement';

import { popularGamesURL } from '../api/api';
import { upcomingGamesURL } from '../api/api';
import { newGamesURL } from '../api/api';

const HomeScreen = () => {
  const [popularGames, setPopularGames] = useState([]);
  const [upcomingGames, setUpcomingGames] = useState([]);
  const [newGames, setNewGames] = useState([]);
  const [games, setGames] = useState();

  // onPress Button
  const popularGamesHandler = () => setGames(popularGames);
  const upcomingGamesHandler = () => setGames(upcomingGames);
  const newGamesHandler = () => setGames(newGames);

  // Fetch games data
  const fetchPopularGames = async () => {
    const response = await axios.get(popularGamesURL());
    const data = await response.data;
    setPopularGames(data.results);
    setGames(data.results);
  };

  const fetchUpcomingGames = async () => {
    const response = await axios.get(upcomingGamesURL());
    const data = await response.data;
    setUpcomingGames(data.results);
  };

  const fetchNewGames = async () => {
    const response = await axios.get(newGamesURL());
    const data = await response.data;
    setNewGames(data.results);
  };

  useEffect(() => {
    fetchPopularGames();
    fetchUpcomingGames();
    fetchNewGames();
  }, []);

  return (
    <View style={styles.container}>
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
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
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

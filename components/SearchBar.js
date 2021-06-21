import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Keyboard } from 'react-native';
import axios from 'axios';

import GreenButton from './GreenButton';
import { searchGameURL } from '../api/api';

// TO DO: onPress button

const SearchBar = ({ setGameshandler }) => {
  const [name, setName] = useState('');

  const fetchSearchedGames = async (name) => {
    Keyboard.dismiss();
    const response = await axios.get(searchGameURL(name));
    const data = await response.data;
    setGameshandler(data.results);
    setName('');
  };

  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.search}
        placeholder='Search game'
        onChangeText={(name) => setName(name)}
        defaultValue={name}
      />
      <GreenButton text='Search' onPress={() => fetchSearchedGames(name)} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  search: {
    flex: 1,
    height: 44,
    backgroundColor: '#fff',
    color: 'black',
    paddingLeft: 10,
  },
});

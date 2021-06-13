import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import GreenButton from './GreenButton';

// TO DO: onPress button

const SearchBar = () => {
  const [name, setName] = useState('');
  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.search}
        placeholder='Search game'
        onChangeText={(name) => setName(name)}
        defaultValue={name}
      />
      <GreenButton text='Search' />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 10,
  },
  search: {
    flex: 1,
    height: 44,
    backgroundColor: '#fff',
    color: 'black',
    paddingLeft: 10,
  },
});

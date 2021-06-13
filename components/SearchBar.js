import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

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
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
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
  button: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#64ffda',
  },
  buttonText: {
    color: '#64ffda',
  },
});

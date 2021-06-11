import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Games info!</Text>
      </View>

      <View style={styles.searchBar}>
        <TextInput
          style={styles.search}
          placeholder='Search'
          onChangeText={(name) => setName(name)}
          defaultValue={name}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>New Games</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Upcoming Games</Text>
        </TouchableOpacity>
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
  mainText: {
    color: '#fff',
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#64ffda',
  },
  buttonText: {
    color: '#64ffda',
  },
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

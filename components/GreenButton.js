import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

// TO DO: onPress button

const GreenButton = ({ text }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default GreenButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#64ffda',
  },
  buttonText: {
    color: '#64ffda',
  },
});

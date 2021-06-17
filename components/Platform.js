import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getPlatform } from '../utils/getPlatform';

const Platform = ({ data }) => {
  return (
    <View style={styles.platform}>
      {getPlatform(data.platform.name)}
      <Text style={styles.platformText}>{data.platform.name}</Text>
    </View>
  );
};

export default Platform;

const styles = StyleSheet.create({
  platform: {
    minWidth: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  platformText: {
    marginTop: 2,
    color: '#fff',
    fontSize: 10,
  },
});

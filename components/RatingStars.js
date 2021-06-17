import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RatingStars = ({ rating }) => {
  const floored = Math.floor(rating);
  const halfStar = rating - floored; // 4.51 - 4 = 0.51

  const getStars = () => {
    const stars = [];
    let emptyStar = 5; // decrease if full stars or half stars are pushed to array
    let key = 0;
    // full stars
    for (let i = 0; i < floored; i++) {
      emptyStar -= 1;
      stars.push(
        <Ionicons key={key++} name='star-sharp' size={20} color='yellow' />
      );
    }
    // half stars
    if (halfStar >= 0.5) {
      stars.push(
        <Ionicons key={key++} name='star-half-sharp' size={20} color='yellow' />
      );
      emptyStar -= 1;
    }
    // empty stars
    for (let i = 0; i < emptyStar; i++) {
      stars.push(
        <Ionicons key={key++} name='star-outline' size={20} color='yellow' />
      );
    }
    return stars;
  };

  return <View style={styles.ratingContainer}>{getStars()}</View>;
};

export default RatingStars;

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    marginRight: 5,
    justifyContent: 'flex-end',
  },
});

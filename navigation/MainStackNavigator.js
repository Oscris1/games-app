import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import GameDetailsScreen from '../screens/GameDetailsScreen';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          title: 'Games info!',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#17171a',
          },
          headerTintColor: '#64ffda',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
        }}
      />
      <Stack.Screen
        name='Game'
        component={GameDetailsScreen}
        options={({ route }) => ({
          title: route.params.item.name,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#17171a',
          },
          headerTintColor: '#64ffda',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;

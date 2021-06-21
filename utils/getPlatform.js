import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const getPlatform = (name) => {
  const size = 25;
  const color = '#fff';
  if (name === 'PC')
    return <MaterialIcons name='computer' size={size} color={color} />;
  else if (name === 'PlayStation 4' || name === 'PlayStation 5')
    return <FontAwesome5 name='playstation' size={size} color={color} />;
  else if (name === 'Xbox Series S/X' || name === 'Xbox One')
    return <FontAwesome5 name='xbox' size={size} color={color} />;
  else if (name === 'Nintendo Switch')
    return (
      <MaterialCommunityIcons
        name='nintendo-switch'
        size={size}
        color={color}
      />
    );
  else if (name === 'iOS')
    return <FontAwesome5 name='apple' size={size} color={color} />;
  else return <FontAwesome name='gamepad' size={size} color={color} />;
};

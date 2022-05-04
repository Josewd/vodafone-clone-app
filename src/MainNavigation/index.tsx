import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pages
import Home from './Home/Index';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ header: () => null }}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;

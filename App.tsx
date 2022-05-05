// Core
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Navigations
import MainNavigation from './src/MainNavigation';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;

// Core
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Navigations
import MainNavigation from './src/MainNavigation';
import { StatusBar } from 'react-native';
import Header from './src/components/Header/Index';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent />
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;

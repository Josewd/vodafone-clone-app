import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// Pages
import Home from './Home/Index';
import Payments from './Payments/Index';

// Components
import { BackButton } from '../components/BackButton/Index';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerLeft: () => <BackButton navigation={navigation} />,
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        options={{ header: () => null }}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="Payments" component={Payments} />
    </Stack.Navigator>
  );
};

export default MainNavigation;

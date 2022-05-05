import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const BackButton = ({ navigation }: any) => {
  const style = StyleSheet.create({
    container: {
      padding: 5,
      margin: 5,
    },
  });

  return (
    <Pressable style={style.container} onPress={navigation.goBack}>
      <Icon name="angle-left" size={20} color="#000" />
    </Pressable>
  );
};

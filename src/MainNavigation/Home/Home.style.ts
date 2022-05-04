import { Platform, StatusBar, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
  width: 100%;
  margin-top: ${Platform.OS === 'android' ? `${StatusBar.currentHeight}px` : 0};
  z-index: 999;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f23f3f;
  position: relative;
`;

export const scroolBox = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

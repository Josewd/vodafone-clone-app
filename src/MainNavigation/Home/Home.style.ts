import { Platform, StatusBar, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Banner = styled.Image`
  width: 95%;
  height: 180px;
  margin: 5px auto;
  border-radius: 5px;
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
  position: relative;
`;

export const scroolBox = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

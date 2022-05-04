import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: ${Platform.OS === 'android' ? `${StatusBar.currentHeight}px` : 0};
`;

import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Logo = styled.Image`
  width: 30px;
  height: 30px;
  margin: 0 10px;
`;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  justify-self: flex-start;
  background-color: transparent;
  margin-top: ${Platform.OS === 'android' ? `${StatusBar.currentHeight}px` : 0};
`;

export const StatusBox = styled.View`
  flex-direction: row;
  height: 100%;
  align-items: center;
  padding: 0 15px;
`;

export const GreetingText = styled.Text`
  color: white;
  font-weight: 300;
`;

export const UserName = styled.Text`
  color: white;
  font-weight: 500;
`;

type statusProps = {
  status: string;
};
export const Status = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  margin: 15px 0 10px 5px;
  background-color: ${(props: statusProps) =>
    props.status === 'online' ? 'green' : 'red'};
`;

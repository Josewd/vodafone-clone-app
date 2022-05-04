import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

// types
import { boxProps, titleProps } from './types';

export const Box = styled.TouchableOpacity`
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.6);
  width: 95%;
  margin: 0 auto;
  height: 95%;
  z-index: 99;
  border-radius: 5px;
  background-color: ${(props: boxProps) =>
    props.color ? props.color : 'white'};
  align-items: center;
`;

export const ProgressBox = styled.View`
  width: 100%;
  margin: 10px auto;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  padding-inline: 10px;
  align-items: flex-end;
  margin-bottom: 10px;
`;

export const PlanRow = styled.View`
  flex-direction: row;
  width: 90%;
  padding-inline: 10px;
  align-items: flex-end;
`;

export const Title = styled.Text`
  font-size: ${(props: titleProps) => `${props.size}px`};
  font-weight: 600;
  color: ${(props: titleProps) => (props.color ? props.color : '#000')};
  margin: 0px 0 5px;
`;

export const SubTitle = styled.Text`
  font-size: 10px;
  font-weight: 400;
  color: #7b7b7b;
  margin: 5px 0 10px 20px;
`;

export const IconBox = styled.View`
  margin: 5px 5px 5px 10px;
`;

export const wrapperBox = StyleSheet.create({
  large: {
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 180,
    elevation: 12,
    backgroundColor: '#0000',
    zIndex: 99,
    margin: 2.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  medium: {
    width: 180,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 170,
    elevation: 12,
    backgroundColor: '#0000',
    zIndex: 99,
    margin: 2.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  small: {
    width: 160,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    elevation: 12,
    backgroundColor: '#0000',
    zIndex: 99,
    margin: 2.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
});

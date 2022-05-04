import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Component
import Progress from '../ProgressBar/Index';

// Style
import {
  Box,
  wrapperBox,
  Title,
  SubTitle,
  Row,
  ProgressBox,
  IconBox,
  PlanRow,
} from './Card.style';

// types
import { Props } from './types';

export const Card = (props: Props) => {
  const {
    data,
    planType,
    lastRenew,
    size,
    icon,
    title,
    invoice,
    backgroundColor,
  } = props;

  const lastDate = new Date().getDate() - new Date(lastRenew || '').getDate();
  const color = backgroundColor ? '#fff' : '#000';

  const mountProgressBar = () => {
    const textInfo = icon === 'phone' ? ' Minutes used' : 'GB used';
    return data ? (
      <>
        <ProgressBox>
          <PlanRow>
            <Title size={25}>{planType}</Title>
            <SubTitle>
              {data.consumed}
              {textInfo}
            </SubTitle>
          </PlanRow>
          <Progress
            width="90%"
            viewStyle="Horizontal"
            indeterminate={false}
            color="red"
            progress={1 - 100 / (data.total / data.consumed) / 100}
          />
        </ProgressBox>
        <Row>
          <SubTitle>last charge was {lastDate} ago</SubTitle>
        </Row>
      </>
    ) : null;
  };

  const mountInvoiceView = () => {
    return (
      invoice && (
        <>
          <Title size={16}> next bill</Title>
          <Title size={30}>
            {'\u20AC'}
            {invoice.toFixed(2)}
          </Title>
          <SubTitle>last bill {'\u20AC'}52,43 </SubTitle>
        </>
      )
    );
  };

  return (
    <View style={wrapperBox[size as keyof StyleMedia]}>
      <Box
        activeOpacity={0.8}
        color={backgroundColor}
        onPress={() => console.log('press')}>
        <Row>
          <IconBox>
            <Icon name={icon} size={20} color={color} />
          </IconBox>
          <Title color={color} size={14}>
            {title}
          </Title>
        </Row>
        {mountProgressBar()}
        {mountInvoiceView()}
        {props.children}
      </Box>
    </View>
  );
};

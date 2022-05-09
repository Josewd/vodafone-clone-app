import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
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
  classes,
} from './Card.style';

// types
import { Props } from './types';

export const Card = (props: Props) => {
  const { data, size, icon, title, invoice, backgroundColor } = props;
  //////////////////////////////////////////// States //////////////////////////////////////////////

  const [itemIndex, setItemIndex] = useState(data?.[0]);

  //////////////////////////////////////////// Constants //////////////////////////////////////////////

  const color = backgroundColor ? '#fff' : '#000';

  //////////////////////////////////////////// Modules //////////////////////////////////////////////

  const mountDotsView = () => {
    const currentItemIndex = data?.findIndex(item => item === itemIndex);
    return data?.map((_, idx) => {
      return (
        <View
          key={idx}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...classes.dot,
            backgroundColor: currentItemIndex === idx ? 'black' : '#888888',
          }}
        />
      );
    });
  };

  const mountProgressBar = () => {
    const CARD_WIDTH = 340;
    return data ? (
      <>
        <FlatList
          onScroll={e =>
            setItemIndex(
              data[Math.round(e.nativeEvent.contentOffset.x / CARD_WIDTH)],
            )
          }
          keyExtractor={item => item.planType}
          data={data}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={true}
          horizontal
          pagingEnabled
        />
      </>
    ) : null;
  };

  const mountInvoiceView = () => {
    return (
      invoice && (
        <>
          <Title size={16}>Upcoming bill</Title>
          <Title size={30}>
            {invoice.toFixed(2).replace('.', ',')}
            {' \u20AC'}
          </Title>
          <SubTitle>Last bill 52,43{' \u20AC'} </SubTitle>
        </>
      )
    );
  };

  //////////////////////////////////////////// Render Return //////////////////////////////////////////////

  return (
    <View style={wrapperBox[size as keyof StyleMedia]}>
      <Box color={backgroundColor}>
        <View style={classes.dotsContainer}>{mountDotsView()}</View>
        <Row>
          {(icon || itemIndex?.icon) && (
            <IconBox>
              <Icon
                name={itemIndex?.icon ? itemIndex.icon : icon}
                size={20}
                color={color}
              />
            </IconBox>
          )}
          <Title color={color} size={14}>
            {itemIndex?.title ? itemIndex.title : title}
          </Title>
        </Row>
        {mountProgressBar()}
        {mountInvoiceView()}
        {props.children}
      </Box>
    </View>
  );
};

//////////////////////////////////////////// Render Item FlatList //////////////////////////////////////////////

const renderItem = ({ item }: any) => {
  const textInfo = item.icon === 'phone' ? ' Minutes used' : 'GB used';
  const lastDate =
    new Date().getDate() - new Date(item.lastRenew || '').getDate();
  return (
    <>
      <ProgressBox>
        <PlanRow>
          <Title size={25}>{item.planType}</Title>
          <SubTitle>
            {item.consumed}
            {textInfo}
          </SubTitle>
        </PlanRow>
        <Progress
          width="90%"
          viewStyle="Horizontal"
          indeterminate={false}
          color="red"
          progress={1 - 100 / (item.total / item.consumed) / 100}
        />
        <Row>
          <SubTitle>Last renew was {lastDate} ago</SubTitle>
        </Row>
      </ProgressBox>
    </>
  );
};

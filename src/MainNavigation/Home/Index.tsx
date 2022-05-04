// Core
import React, { useState } from 'react';
import { RefreshControl, View } from 'react-native';
import { Text } from 'react-native-elements';

// Components
import { Card } from '../../components/Card/Index';
import Header from '../../components/Header/Index';

// Media
import bckImage from '../../img/vodafone-bck.jpg';

// Styled
import { ImageBackground, Row, ScrollView, scroolBox } from './Home.style';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onRefresh = (): void => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const refreshControl = (
    <RefreshControl
      refreshing={loading}
      onRefresh={onRefresh}
      tintColor="#ff0000"
      title="Loading..."
      titleColor="#00ff00"
      colors={['#ff0000', '#00ff00', '#0000ff']}
      progressBackgroundColor="#fff"
    />
  );

  return (
    <ImageBackground source={bckImage}>
      <Header user={{ name: 'Jose Junior', status: 'online' }} />
      <ScrollView
        refreshControl={refreshControl}
        contentContainerStyle={scroolBox.center}>
        <Card
          icon="wifi"
          title="Internet"
          size="large"
          data={{ total: 100, consumed: 78 }}
          planType="100GB Monthly"
          lastRenew="Wed May 02 2022 12:56:51 GMT+0100 (Western European Summer Time)"
        />
        <Row>
          <Card
            title="Current Charges"
            icon="file-text-o"
            size="medium"
            invoice={72}
          />
          <View>
            <Card title="My Vodafone Tv" icon="tv" size="small">
              <Text>Manage Screens</Text>
            </Card>
            <Card
              title="My Account"
              icon="user-circle"
              size="small"
              backgroundColor="red">
              <Text style={{ color: '#fff' }}>Manage Profile</Text>
            </Card>
          </View>
        </Row>
        <Card
          icon="phone"
          title="Calls"
          size="large"
          data={{ total: 500, consumed: 374 }}
          planType="500 Min Monthly"
          lastRenew="Wed May 02 2022 12:56:51 GMT+0100 (Western European Summer Time)"
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default Home;

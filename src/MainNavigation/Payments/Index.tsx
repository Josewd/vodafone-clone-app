import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

// Components
import { Card } from '../../components/Card/Card';

const Payments: React.FC = () => {
  return (
    <View style={{ width: '95%', marginHorizontal: '2.5%' }}>
      <Card title="Next billing payment" size="large">
        <Text h4>Manage Screens</Text>
      </Card>
    </View>
  );
};

export default Payments;

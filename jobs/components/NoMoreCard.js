import React from 'react';
import { Card, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

const NoMoreCard = ({ navigation }) => {
  return (
    <Card title="No More Jobs">
      <Button
        title="Back To Map"
        large
        icon={{ name: 'my-location' }}
        backgroundColor="#03A9F4"
        onPress={() => navigation.navigate('map')}
      />
    </Card>
  );
};

export default withNavigation(NoMoreCard);

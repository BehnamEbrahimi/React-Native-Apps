import React from 'react';
import { Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

const NoMoreCard = () => {
  return (
    <Card title="All Done!">
      <Text style={{ marginBottom: 10 }}>There's no more content here!</Text>
      <Button backgroundColor="#03A9F4" title="Get more!" />
    </Card>
  );
};

export default NoMoreCard;

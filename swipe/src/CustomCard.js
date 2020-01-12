import React from 'react';
import { Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

const CustomCard = ({ cardData }) => {
  return (
    <Card key={cardData.id} title={cardData.text} image={{ uri: cardData.uri }}>
      <Text style={{ marginBottom: 10 }}>
        I can customize the Card further.
      </Text>
      <Button
        icon={{ name: 'code' }}
        backgroundColor="#03A9F4"
        title="View Now!"
      />
    </Card>
  );
};

export default CustomCard;

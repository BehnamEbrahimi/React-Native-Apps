import React from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import { Card } from 'react-native-elements';

const CustomCard = ({ cardData: job }) => {
  const initialRegion = {
    longitude: job.longitude,
    latitude: job.latitude,
    latitudeDelta: 0.045,
    longitudeDelta: 0.02
  };

  return (
    <Card title={job.jobtitle}>
      <View style={{ height: 300 }}>
        <MapView
          scrollEnabled={false}
          style={{ flex: 1 }}
          cacheEnabled={Platform.OS === 'android' ? true : false}
          initialRegion={initialRegion}></MapView>
      </View>
      <View style={styles.detailWrapper}>
        <Text>{job.company}</Text>
        <Text>{job.formattedRelativeTime}</Text>
      </View>
      <Text>{job.snippet.replace(/<b>/g, '').replace(/<\/b/g, '')}</Text>
    </Card>
  );
};

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
};

export default CustomCard;

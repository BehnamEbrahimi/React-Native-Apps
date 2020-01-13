import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { fetchJobs } from '../actions';

const MapScreen = ({ fetchJobs, navigation }) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({
    longitude: 151.2,
    latitude: -33.87,
    longitudeDelta: 0.04,
    latitudeDelta: 0.09
  });

  const onRegionChangeComplete = region => {
    setCurrentLocation(region);
  };

  const onButtonPress = () => {
    fetchJobs(currentLocation, () => {
      navigation.navigate('deck');
    });
  };

  useEffect(() => {
    setMapLoaded(true);
  }, []);

  if (!mapLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" style={{ marginTop: 200 }} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView
        region={currentLocation}
        style={{ flex: 1 }}
        onRegionChangeComplete={onRegionChangeComplete}
      />
      <View style={styles.buttonContainer}>
        <Button
          large
          title="Search This Area"
          backgroundColor="#009688"
          icon={{ name: 'search' }}
          onPress={onButtonPress}
        />
      </View>
    </View>
  );
};

const styles = {
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0
  }
};

export default connect(null, { fetchJobs })(MapScreen);

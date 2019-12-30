import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from 'expo-location';
import { connect } from 'react-redux';
import { addLocation } from '../actions/locationActions';
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused, addLocation, recording }) => {
  const [shouldTrack, setShouldTrack] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    if (recording || isFocused) {
      setShouldTrack(true);
    } else {
      setShouldTrack(false);
    }
  }, [recording, isFocused]);

  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        await requestPermissionsAsync();
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10
          },
          callback
        );
      } catch (e) {
        setErr(e);
      }
    };
    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  const callback = useCallback(
    location => {
      addLocation(location, recording);
    },
    [recording]
  );

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create A Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <FontAwesome name="plus" size={20} />
};

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return {
    recording: state.location.recording
  };
};

export default connect(mapStateToProps, { addLocation })(
  withNavigationFocus(TrackCreateScreen)
);

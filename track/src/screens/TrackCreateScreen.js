import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import { addLocation } from '../actions/locationActions';
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({ addLocation, recording }) => {
  // isFocused provided by withNavigationFocus HOC imported from react-navigation is not working!
  const [isFocused, setIsFocused] = useState(true);
  const [err] = useLocation(recording || isFocused, location => {
    addLocation(location);
  });

  return (
    <>
      <NavigationEvents
        onWillBlur={() => {
          setIsFocused(false);
        }}
        onDidFocus={() => setIsFocused(true)}
      />
      <SafeAreaView forceInset={{ top: 'always' }}>
        <Text h2>Create A Track</Text>
        <Map />
        {err ? <Text>Please enable location services</Text> : null}
        <TrackForm />
      </SafeAreaView>
    </>
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

export default connect(mapStateToProps, { addLocation })(TrackCreateScreen);

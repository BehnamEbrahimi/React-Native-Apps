import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ track }) => {
  const initialCoords = track.locations[0].coords;

  return (
    <>
      <Text style={{ fontSize: 48 }}>{track.name}</Text>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords
        }}
        style={styles.map}>
        <Polyline
          strokeWidth={5}
          strokeColor="rgba(173,21,97,1.0)"
          coordinates={track.locations.map(loc => loc.coords)}
        />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

const mapStateToProps = (state, ownProps) => {
  const _id = ownProps.navigation.getParam('_id');

  return {
    track: state.track.tracks.find(t => t._id === _id)
  };
};

export default connect(mapStateToProps, {})(TrackDetailScreen);

import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchTracks } from '../actions/trackActions';

const TrackListScreen = ({ navigation, fetchTracks, tracks }) => {
  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        style={{ marginTop: 20 }}
        data={tracks}
        keyExtractor={track => track._id}
        renderItem={({ item: track }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('TrackDetail', { _id: track._id })
              }>
              <ListItem
                containerStyle={styles.track}
                chevron
                title={track.name}
                titleStyle={styles.title}
              />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

TrackListScreen.navigationOptions = {
  title: 'Tracks'
};

const styles = StyleSheet.create({
  track: {
    backgroundColor: 'rgba(228,60,63,1.0)',
    margin: 5,
    borderRadius: 10
  },
  title: {
    color: 'white'
  }
});

const mapStateToProps = state => {
  return {
    tracks: state.track.tracks
  };
};

export default connect(mapStateToProps, { fetchTracks })(TrackListScreen);

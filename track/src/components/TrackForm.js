import React from 'react';
import { Input, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { createTrack } from '../actions/trackActions';
import {
  changeName,
  startRecording,
  stopRecording
} from '../actions/locationActions';
import Spacer from './Spacer';

const TrackForm = ({
  navigation,
  createTrack,
  changeName,
  startRecording,
  stopRecording,
  name,
  recording,
  locations
}) => {
  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
    navigation.navigate('TrackList');
  };

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter name"
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save Recording" onPress={saveTrack} />
        ) : null}
      </Spacer>
    </>
  );
};

const mapStateToProps = state => {
  return {
    name: state.location.name,
    recording: state.location.recording,
    locations: state.location.locations
  };
};

export default connect(mapStateToProps, {
  changeName,
  createTrack,
  startRecording,
  stopRecording
})(withNavigation(TrackForm));

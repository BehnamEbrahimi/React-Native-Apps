import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Deck from '../components/Deck';
import { likeJob } from '../actions';

const DeckScreen = ({ jobs, likeJob }) => {
  return (
    <View style={{ marginTop: 10 }}>
      <Deck data={jobs} onSwipeRight={job => likeJob(job)} keyProp="jobkey" />
    </View>
  );
};

function mapStateToProps({ jobs }) {
  return { jobs };
}

export default connect(mapStateToProps, { likeJob })(DeckScreen);

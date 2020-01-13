import React from 'react';
import { View, Text, TouchableOpacity, Linking, FlatList } from 'react-native';
import { Button, Card } from 'react-native-elements';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

const ReviewScreen = ({ likedJobs }) => {
  return (
    <FlatList
      data={likedJobs}
      keyExtractor={job => job.jobkey}
      renderItem={({ item: job }) => {
        const {
          company,
          formattedRelativeTime,
          url,
          longitude,
          latitude,
          jobtitle,
          jobkey
        } = job;
        const initialRegion = {
          longitude,
          latitude,
          latitudeDelta: 0.045,
          longitudeDelta: 0.02
        };

        return (
          <Card title={jobtitle}>
            <View style={{ height: 200 }}>
              <MapView
                style={{ flex: 1 }}
                cacheEnabled={Platform.OS === 'android'}
                scrollEnabled={false}
                initialRegion={initialRegion}
              />
              <View style={styles.detailWrapper}>
                <Text style={styles.italics}>{company}</Text>
                <Text style={styles.italics}>{formattedRelativeTime}</Text>
              </View>
              <Button
                title="Apply Now!"
                backgroundColor="#03A9F4"
                onPress={() => Linking.openURL(url)}
              />
            </View>
          </Card>
        );
      }}
    />
  );
};

ReviewScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('settings')}>
        <FontAwesome name="gear" size={30} />
      </TouchableOpacity>
    )
  };
};

const styles = {
  italics: {
    fontStyle: 'italic'
  },
  detailWrapper: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
};

function mapStateToProps({ likedJobs }) {
  return { likedJobs };
}

export default connect(mapStateToProps)(ReviewScreen);

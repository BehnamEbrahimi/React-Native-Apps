import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { connect } from 'react-redux';
import { signout } from '../actions/authActions';
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = ({ signout }) => {
  return (
    <>
      {/* SafeAreaView is to make sure the content is not behind the status bar */}
      <SafeAreaView forceInset={{ top: 'always' }}>
        <Text style={{ fontSize: 48, textAlign: 'center' }}>
          Account Screen
        </Text>
        <Spacer>
          <Button title="Sign Out" onPress={signout} />
        </Spacer>
      </SafeAreaView>
    </>
  );
};

AccountScreen.navigationOptions = {
  tabBarIcon: <FontAwesome name="gear" size={20} />
};

const styles = StyleSheet.create({});

export default connect(null, { signout })(AccountScreen);

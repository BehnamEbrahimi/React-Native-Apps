import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import { signup, clearErrorMessage } from '../actions/authActions';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ errorMessage, signup, clearErrorMessage }) => {
  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead!"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  }
});

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.errorMessage
  };
};

export default connect(mapStateToProps, { signup, clearErrorMessage })(
  SignupScreen
);

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import { signin, clearErrorMessage } from '../actions/authActions';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ({ errorMessage, signin, clearErrorMessage }) => {
  return (
    <View style={styles.container}>
      {/* Other Navigation Events: onWillFocus, onDidFocus, onWillBlur, onDidBlur. Other way: refer to IndexScreen on the blog app */}
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign In"
        errorMessage={errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
      />
      <NavLink
        routeName="Signup"
        text="Don't have an account? Go back and sign up!"
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
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

export default connect(mapStateToProps, { signin, clearErrorMessage })(
  SigninScreen
);

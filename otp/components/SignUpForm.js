import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'http://bc2b88d1.ngrok.io';

const SignUpForm = () => {
  const [phone, setPhone] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/auth`, { phone });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={{ marginBottom: 30 }}>
      <View style={{ marginBottom: 10 }}>
        <Text>Enter Phone Number</Text>
        <Input value={phone} onChangeText={phone => setPhone(phone)} />
      </View>
      <Button onPress={handleSubmit} title="Submit" />
    </View>
  );
};

export default SignUpForm;

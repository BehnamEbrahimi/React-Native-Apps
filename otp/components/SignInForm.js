import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'http://bc2b88d1.ngrok.io';

const SignInForm = () => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      let {
        data: { token }
      } = await axios.post(`${ROOT_URL}/auth/verify`, {
        phone,
        code
      });

      console.log(token);
      setMessage('You are logged in!');
    } catch (err) {
      console.log(err);
      setMessage('Bad credintials!');
    }
  };

  return (
    <View>
      <View style={{ marginBottom: 10 }}>
        <Text>Enter Phone Number</Text>
        <Input value={phone} onChangeText={phone => setPhone(phone)} />
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text>Enter Code</Text>
        <Input value={code} onChangeText={code => setCode(code)} />
      </View>

      <Button onPress={handleSubmit} title="Submit" />
      <Text>{message}</Text>
    </View>
  );
};

export default SignInForm;

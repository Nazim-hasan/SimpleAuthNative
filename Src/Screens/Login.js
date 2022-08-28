import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { Axios } from 'react-native-axios';
import axios from 'axios';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [text, setText] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    const data = {email: email, password: password};

    axios
      .post('http://127.0.0.1/SimpleAuthBackend/public/api/login', {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        alert('Login Successful');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const toggleRegister = e => {
    e.preventDefault();
    navigation.navigate('Register');
  };
  return (
    <SafeAreaView style={{marginTop: 50}}>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 20}}>
        {/* <Text>Enter email</Text> */}
        <TextInput
          style={{height: 40}}
          placeholder="Enter Email"
          onChangeText={newText => setEmail(newText)}
          defaultValue={email}
        />
      </View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 20}}>
        <TextInput
          style={{height: 40}}
          placeholder="Enter Password"
          onChangeText={newText => setPassword(newText)}
          defaultValue={password}
        />
      </View>
      <View style={{marginTop: 20}}>
        <Button onPress={handleSubmit} title="Login" />
      </View>
      <Text style={{textAlign: 'center', marginTop: 20}}>
        Not Register?{' '}
        <Text onPress={toggleRegister} style={{}}>
          Create an account
        </Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  customInput: {
    borderStyle: 'solid',
    height: 20,
    marginLeft: 10,
  },
});

export default Login;

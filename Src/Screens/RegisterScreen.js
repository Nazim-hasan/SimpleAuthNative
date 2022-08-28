import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
  };
  const toggleLogin = e => {
    e.preventDefault();
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={{marginTop: 50}}>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 20}}>
        <TextInput
          style={{height: 40}}
          placeholder="Enter Name"
          onChangeText={newText => setName(newText)}
          defaultValue={name}
        />
      </View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 30}}>
        <TextInput
          style={{height: 40}}
          placeholder="Enter Email"
          onChangeText={newText => setEmail(newText)}
          defaultValue={email}
        />
      </View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 30}}>
        <TextInput
          style={{height: 40}}
          placeholder="Enter Password"
          onChangeText={newText => setPassword(newText)}
          defaultValue={password}
        />
      </View>
      <View style={{marginTop: 20}}>
        <Button onPress={handleSubmit} title="Register" />
      </View>
      <Text style={{textAlign: 'center', marginTop: 20}}>
        Already Registered?{' '}
        <Text onPress={toggleLogin} style={{}}>
          Login
        </Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default RegisterScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TelaLogin= ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');

  const fazerLogin = async () => {
    if (username === 'user' && senha === '123') {
      try {
        await AsyncStorage.setItem('username', username);
        await AsyncStorage.setItem('isLoggedIn', 'true');
        navigation.replace('Home');
      } catch (e) {
        Alert.alert('Ocorreu um erro ao salvar os dados de login.');
      }
    } else {
      Alert.alert('Nome de usuário ou senha inválidos.');
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 28, marginBottom: 20, fontStyle:'italic', fontWeight:'bold', color:'#D4BF96'}}>KITE</Text>
      <TextInput
        placeholder="Usuário"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={{ borderWidth: 1, padding: 10, margin: 10, width: 200 }}
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={(text) => setSenha(text)}
        secureTextEntry
        style={{ borderWidth: 1, padding: 10, margin: 10, width: 200 }}
      />
      <Button title="Login" onPress={TelaLogin} />
    </View>
  );
};

export default TelaLogin;

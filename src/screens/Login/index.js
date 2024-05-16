import React, { useState, useContext } from 'react';
import {
  Alert,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { ThemeContext } from '../../contexts/ThemeContext';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';

import { styles } from './styles';
// import { processLogin } from '../../services/requests/users';

export default function Login({ navigation }) {
  const { processLogin } = useContext(AuthenticationContext);

  const [typedUsername, setTypedUsername] = useState('');
  const [typedPassword, setTypedPassword] = useState('');

  const { selectedTheme } = useContext(ThemeContext);
  const style = styles(selectedTheme);

  async function loginButton() {
    console.log('LOGAR - chamando request');
    const result = await processLogin(typedUsername, typedPassword);
    if (result) {
      navigation.navigate('Home', { typedUsername });
    } else {
      Alert.alert('Operação de Login falhou');
    }
  }

  function registerButton() {
    console.log('CADASTRAR NOVA CONTA');
    navigation.navigate('Cadastro');
  }

  return (
    <View style={style.container}>
      <StatusBar />
      <Text
        style={style.title}
        onPress={() => {
          navigation.navigate('Configurações');
        }}>
        No Precinho
      </Text>

      <View style={style.inputArea}>
        <TextInput
          style={style.input}
          placeholder="Email"
          placeholderTextColor="#999"
          autoCapitalize="words"
          value={typedUsername}
          onChangeText={setTypedUsername}
        />
        <TextInput
          style={style.input}
          placeholder="senha"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={typedPassword}
          onChangeText={setTypedPassword}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={style.button} onPress={() => loginButton()}>
        <Text style={style.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => registerButton()}>
        <Text style={style.registerText}>Cadastrar Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

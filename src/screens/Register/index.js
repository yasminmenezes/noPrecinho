import React, { useContext, useState } from 'react';
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { ThemeContext } from '../../contexts/ThemeContext';
import { styles } from './styles';
import { getAddressByCEP } from '../../services/requests/address';
import { createUser } from '../../services/requests/users';

export default function Register({ navigation }) {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [confPass, setConfPass] = useState('');

  const [searchedCEP, setSearchedCEP] = useState('');
  const [UF, setUF] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [numero, setNumero] = useState('');

  const { selectedTheme } = useContext(ThemeContext);
  const style = styles(selectedTheme);

  async function searchCEP() {
    console.log('CEP: ', searchedCEP);
    const text = await getAddressByCEP(searchedCEP);
    console.log('TEXTO RECEBIDO:', text);
    extractAddress(text);
  }

  function extractAddress(cepJSON) {
    cepJSON.uf != '' ? setUF(cepJSON.uf) : setUF('');
    cepJSON.localidade != ''
      ? setLocalidade(cepJSON.localidade)
      : setLocalidade('');
    cepJSON.logradouro != ''
      ? setLogradouro(cepJSON.logradouro)
      : setLogradouro('');
    cepJSON.bairro != '' ? setBairro(cepJSON.bairro) : setBairro('');
  }

  function checkRequiredFields() {
    if (username !== '' && pass !== '' && confPass !== '') {
      return true;
    }
    Alert.alert('Campos obrigatórios devem ser preenchidos!');
    return false;
  }

  function checkPasswordsMatch() {
    if (pass === confPass) {
      return true;
    }
    Alert.alert('Senhas não compatíveis! \nAs senhas devem ser iguais');
    return false;
  }

  async function registerUser() {
    if (checkRequiredFields() && checkPasswordsMatch()) {
      console.log(`Olá, ${username}`);

      const result = await createUser({
        username: username,
        password: pass,
        cep: searchedCEP,
        uf: UF,
        localidade: localidade,
        bairro: bairro,
        numero: numero,
        carrinho: [],
        favoritos: [],
      });
      console.log('Criou User:', result);

      if (result) {
        console.log('Deu bom?');
        navigation.navigate('Login');
        Alert.alert(`Olá, ${username}
        Digite suas credenciais para logar`);
      } else {
        console.log('deu ruim');
      }
    }
  }

  return (
    <ScrollView style={style.containerRegister}>
      <Text style={style.topicTitle}>Dados Pessoais</Text>
      <View style={style.inputArea}>
        <TextInput
          style={style.input}
          placeholder="Nome de Usuário *"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={style.input}
          placeholder="Senha *"
          placeholderTextColor="#999"
          value={pass}
          onChangeText={setPass}
          secureTextEntry={true}
        />
        <TextInput
          style={style.input}
          placeholder="Confirmação de Senha *"
          placeholderTextColor="#999"
          value={confPass}
          onChangeText={setConfPass}
          secureTextEntry={true}
        />
      </View>

      <Text style={style.topicTitle}>Dados de Endereço</Text>
      <View style={style.inputArea}>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={[style.input, { width: '56%' }]}
            placeholder="CEP"
            placeholderTextColor="#999"
            keyboardType="number-pad"
            value={searchedCEP}
            onChangeText={setSearchedCEP}
          />
          <View style={{ width: '4%' }} />
          <TouchableOpacity
            style={[style.button, { width: '40%' }]}
            onPress={() => searchCEP()}>
            <Text style={style.buttonText}>Buscar CEP</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={style.input}
          placeholder="UF"
          placeholderTextColor="#999"
          value={UF}
          onChangeText={setUF}
        />
        <TextInput
          style={style.input}
          placeholder="Localidade"
          placeholderTextColor="#999"
          value={localidade}
          onChangeText={setLocalidade}
        />
        <TextInput
          style={style.input}
          placeholder="Logradouro"
          placeholderTextColor="#999"
          value={logradouro}
          onChangeText={setLogradouro}
        />
        <TextInput
          style={style.input}
          placeholder="Bairro"
          placeholderTextColor="#999"
          value={bairro}
          onChangeText={setBairro}
        />
        <TextInput
          style={style.input}
          placeholder="Número"
          placeholderTextColor="#999"
          value={numero}
          onChangeText={setNumero}
        />
      </View>
      <View style={style.buttonArea}>
        <TouchableOpacity style={style.button} onPress={() => registerUser()}>
          <Text style={style.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

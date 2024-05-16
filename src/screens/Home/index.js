import React, { useContext, useState, useEffect } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from '../../contexts/ThemeContext';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { styles } from './styles';
import TopHeader from '../../Components/TopHeader';

export default function Home({ navigation }) {
  const { user } = useContext(AuthenticationContext);
  const { selectedTheme } = useContext(ThemeContext);
  const style = styles(selectedTheme);

  function goToGroceryCart() {
    if (user.carrinho.length === 0) {
      Alert.alert('Carrinho vazio!', 'adicione um produto na tela de feira');
    } else {
      navigation.navigate('Carrinho de Feira');
    }
  }

  return (
    <View style={style.containerHome}>
      <TopHeader navigation={navigation} username={user.username} />
      <Text style={style.subHeaderText}>
        {`Para qualquer das opções abaixo, levaremos em conta por prioridade o bairro ${user.bairro}. Por favor, selecione a opção de seu interesse:`}
      </Text>
      <View style={style.mainContainer}>
        <TouchableOpacity
          style={style.mainButton}
          onPress={() => navigation.navigate('Produto No Precinho')}>
          <Text style={style.buttonText}>Produto</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.mainButton}
          onPress={() => navigation.navigate('Feira No Precinho')}>
          <Text style={style.buttonText}>Feira</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.mainButton}
          onPress={() => navigation.navigate('Combustível No Precinho')}>
          <Text style={style.buttonText}>Combustível</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={style.mainButton}
          onPress={() => navigation.navigate('Favoritos')}>
          <Text style={style.buttonText}>Favoritos</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={style.mainButton}
          onPress={() => goToGroceryCart()}>
          <Text style={style.buttonText}>Carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

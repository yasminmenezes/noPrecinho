import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from '../../contexts/ThemeContext';
import { styles } from './styles';

export default function TopHeader({ navigation, username }) {
  const { selectedTheme } = useContext(ThemeContext);
  const style = styles(selectedTheme);

  return (
    <View style={style.headerArea}>
      <Text style={style.title}>Olá, {username}</Text>
      <View style={style.iconsArea}>
        <TouchableOpacity onPress={() => navigation.navigate('Configurações')}>
          <Text style={style.icon}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={style.iconArea}>
          <Text style={style.icon}>x</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import React, { useContext } from 'react';
import { Switch, Text, View } from 'react-native';
import { ThemeContext } from '../../contexts/ThemeContext';
import { styles } from './styles';

export default function Settings({ navigation }) {
  const { currentTheme, selectedTheme, saveDeviceTheme } =
    useContext(ThemeContext);
  const style = styles(selectedTheme);

  return (
    <View style={style.containerSettings}>
      <View style={style.topicArea}>
        <Text style={style.topic}>Tema:</Text>
        <View style={style.topicRow}>
          <Text style={style.topicOption}>Claro</Text>
          <Switch
            onValueChange={() =>
              currentTheme === 'dark'
                ? saveDeviceTheme('light')
                : saveDeviceTheme('dark')
            }
            value={currentTheme === 'dark' ? true : false}
          />
          <Text style={style.topicOption}>Escuro</Text>
        </View>
      </View>
    </View>
  );
}

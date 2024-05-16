import React, { createContext, useState, useEffect } from 'react';
import { dark, light } from '../globalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext({});

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState('dark');

  const themes = {
    dark: dark,
    light: light,
  };

  useEffect(async () => {
    const savedTheme = await AsyncStorage.getItem('@tema');
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  async function saveDeviceTheme(theme) {
    await AsyncStorage.setItem('@tema', theme);
    setCurrentTheme(theme);
  }

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        selectedTheme: themes[currentTheme],
        saveDeviceTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
}

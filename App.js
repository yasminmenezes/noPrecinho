import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { AuthenticationProvider } from './src/contexts/AuthenticationContext';
import { GroceryProvider } from './src/contexts/GroceryContext';

import Routes from './src/routes';

export default function App() {
  return (
    <ThemeProvider>
      <AuthenticationProvider>
        <GroceryProvider>
          <Routes />
        </GroceryProvider>
      </AuthenticationProvider>
    </ThemeProvider>
  );
}

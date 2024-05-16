import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import Home from './screens/Home';
import Register from './screens/Register';
import Settings from './screens/Settings';
import Grocery from './screens/CheapestGrocery';
import Product from './screens/CheapestProduct';
import ProductDetails from './screens/ProductDetails';
import GroceryCart from './screens/GroceryCart';
import Fuel from './screens/CheapestFuel';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Feira No Precinho" component={Grocery} />
        <Stack.Screen name="Produto No Precinho" component={Product} />
        <Stack.Screen name="Detalhes do Produto" component={ProductDetails} />
        <Stack.Screen name="Combustível No Precinho" component={Fuel} />
        {/* <Stack.Screen name="Favoritos" component={Favorite} /> */}
        <Stack.Screen name="Carrinho de Feira" component={GroceryCart} />
        <Stack.Screen name="Cadastro" component={Register} />
        <Stack.Screen name="Configurações" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React, { useContext, useState, useEffect } from 'react';
import { FlatList, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import Fuel from '../../Components/Fuel';
import { ThemeContext } from '../../contexts/ThemeContext';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { styles } from './styles';
import { findFuelList } from '../../services/requests/users';

export default function CheapestFuel({ navigation }) {
  const { user } = useContext(AuthenticationContext);
  const [searchedProduct, setSearchedProduct] = useState('Gasolina');
  const [productsList, setProductsList] = useState([]);
  const { selectedTheme } = useContext(ThemeContext);
  const style = styles(selectedTheme);

  useEffect(async () => {
    await getCheapestFuel(searchedProduct);
  }, []);

  async function getCheapestFuel(productName) {
    setSearchedProduct(productName);
    const productList = await findFuelList(productName);
    setProductsList(productList);
  }

  return (
    <View style={style.containerHome}>
      <StatusBar />

      <View style={style.contentArea}>
        <Text style={style.contentText}>
          Qual tipo de Combustível você gostaria de pesquisar?
        </Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={
            searchedProduct === 'Gasolina' ? style.selectedButton : style.button
          }
          onPress={() => getCheapestFuel('Gasolina')}>
          <Text style={style.buttonText}>Gasolina Comum</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            searchedProduct === 'Gasolina aditivada'
              ? style.selectedButton
              : style.button
          }
          onPress={() => getCheapestFuel('Gasolina aditivada')}>
          <Text style={style.buttonText}>Gasolina Aditivada</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            searchedProduct === 'Diesel' ? style.selectedButton : style.button
          }
          onPress={() => getCheapestFuel('Diesel')}>
          <Text style={style.buttonText}>Diesel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            searchedProduct === 'Álcool' ? style.selectedButton : style.button
          }
          onPress={() => getCheapestFuel('Álcool')}>
          <Text style={style.buttonText}>Álcool</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            searchedProduct === 'GNV' ? style.selectedButton : style.button
          }
          onPress={() => getCheapestFuel('GNV')}>
          <Text style={style.buttonText}>GNV</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={style.productFlatlist}
        data={productsList.sort((a, b) => a.price >= b.price)}
        ItemSeparatorComponent={() => <View style={style.separatorLine} />}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Detalhes do Produto', item);
            }}>
            <Fuel {...item} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        ListFooterComponent={() => <View style={style.flatListFooter} />}
      />
    </View>
  );
}

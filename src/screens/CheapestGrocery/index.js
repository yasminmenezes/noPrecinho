import React, { useContext, useState, useEffect } from 'react';
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Product from '../../Components/Product';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { styles } from './styles';
import {
  getUserGroceryList,
  getProductList,
} from '../../services/requests/users';

export default function CheapestGrocery({ navigation }) {
  const [searchedProduct, setSearchedProduct] = useState('');
  const [productsList, setProductsList] = useState([]);
  const { user } = useContext(AuthenticationContext);
  const { selectedTheme } = useContext(ThemeContext);
  const style = styles(selectedTheme);

  useEffect(async () => {
    const userGrocery = await getUserGroceryList(user.username);
    const productList = await getProductList(
      searchedProduct,
      'CheapestGrocery',
    );

    if (userGrocery.length <= 0) {
      if (productList.length > 0) {
        setProductsList(productList);
      }
    } else {
      //userGrocery > 0
      for (let i = 0; i < userGrocery.length; i = i + 1) {
        // console.log('Varrendo feira do user: ', userGrocery[i].id);
        productList[userGrocery[i].id - 1].quantity = userGrocery[i].quantity;
      }
      setProductsList(productList);
    }
  }, []);

  async function getCheapest(productName) {
    const productList = await getProductList(productName, 'CheapestGrocery');
    setProductsList(productList);
  }

  function goToGroceryCart() {
    if (user.carrinho.length === 0) {
      Alert.alert('Carrinho vazio!', 'adicione um produto no carrinho');
    } else {
      navigation.navigate('Carrinho de Feira');
    }
  }

  return (
    <View style={style.containerHome}>
      <View style={style.headerContainer}>
        <View style={style.contentArea}>
          <Text style={style.contentText}>
            Busque produtos para adicionar à feira
          </Text>
        </View>

        <View style={style.inputArea}>
          <View style={style.inputAndButtonDisplay}>
            <TextInput
              style={style.input}
              placeholder="Produto"
              placeholderTextColor="#999"
              autoCapitalize="none"
              value={searchedProduct}
              onChangeText={setSearchedProduct}
            />
            <View style={style.inputAndButtonSeparator} />
            <TouchableOpacity
              style={style.button}
              onPress={() => getCheapest(searchedProduct)}>
              <Text style={style.buttonText}>Buscar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={style.bodyContainer}>
        <FlatList
          style={style.productFlatlist}
          data={productsList.sort((a, b) =>
            a.description.localeCompare(b.description),
          )}
          // data={productsList.sort((a, b) => a.price >= b.price)}
          ItemSeparatorComponent={() => <View style={style.separatorLine} />}
          initialNumToRender={5}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Detalhes do Produto', item.code);
              }}>
              <Product {...item} grocery={true} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>

      <View style={style.bottomContainer}>
        <TouchableOpacity
          onPress={() => goToGroceryCart()}
          style={style.footerContainer}>
          <Text style={style.groceryButtonText}>Ir para o Carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
